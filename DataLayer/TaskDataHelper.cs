using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataLayer.Models;
using Task = DataLayer.Models.Task;

namespace DataLayer
{
    public static class TaskDataHelper
    {

        public static List<Task> GetTasks()
        {
            using (var context = new NovaForiDBContext())
            {
                return context.Tasks.ToList();
            }
        }

        public static List<Task> GetTasksByType(int type)
        {
            using (var context = new NovaForiDBContext())
            {
                return context.Tasks.Where(c => c.Type == type).ToList();
            }
        }

        public static bool CreateTask(Task task)
        {
            using (var context = new NovaForiDBContext())
            {
                context.Tasks.Add(task);
                return context.SaveChanges() > 1;
            }
        }

        public static List<Task> ToggleTaskStatus(int id)
        {
            using (var context = new NovaForiDBContext())
            {
                var task = context.Tasks.FirstOrDefault(c => c.Id == id);
                if (task != null)
                {
                    task.Type = task.Type == 0 ? 1 : 0;
                    if (context.SaveChanges() > 1)
                    {
                        return GetTasks();
                    } 
                }
                return GetTasks();
            }
        }
    }
}

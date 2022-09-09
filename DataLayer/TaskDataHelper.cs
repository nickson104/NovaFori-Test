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
    }
}

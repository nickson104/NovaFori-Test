using DataLayer.Enums;
using System;
using System.Collections.Generic;

namespace DataLayer.Models
{
    public partial class Task
    {
        public Task(string _description)
        {
            Description = _description;
            Type = (int)TaskType.Pending;
        }

        public Task()
        {

        }

        public int Id { get; set; }
        public string? Description { get; set; }
        public int Type { get; set; }
    }
}

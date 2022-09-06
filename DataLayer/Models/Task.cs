using System;
using System.Collections.Generic;

namespace DataLayer.Models
{
    public partial class Task
    {
        public int Id { get; set; }
        public string? Description { get; set; }
        public int Type { get; set; }
    }
}

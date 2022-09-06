using DataLayer;
using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;

namespace NovaFori_Test.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        
        private readonly ILogger<TaskController> _logger;

        public TaskController(ILogger<TaskController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<DataLayer.Models.Task> Get()
        {
            return TaskDataHelper.GetTasks();
        }
    }
}
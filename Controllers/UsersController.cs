using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Stills.DataAccess;
using Stills.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stills.Controllers
{
    [ApiController]
    [Route("api/Users")]
    public class UsersController : ControllerBase
    {
        UsersRepository _repo;
        public UsersController(UsersRepository repo)
        {
            _repo = repo;
        }

        [HttpPost]
        public IActionResult AddUser(User user)
        {
            _repo.Add(user);
            return Created($"api/Users", user);
        }


    }
}

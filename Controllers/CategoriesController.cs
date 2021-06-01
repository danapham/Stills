using Microsoft.AspNetCore.Mvc;
using Stills.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stills.Controllers
{
    [ApiController]
    [Route("api/Categories")]
    public class CategoriesController : Controller
    {
        CategoriesRepository _repo;

        public CategoriesController(CategoriesRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var categories = _repo.GetAll();

            return Ok(categories);
        }
    }
}

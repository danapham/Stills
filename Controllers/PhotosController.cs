using Microsoft.AspNetCore.Mvc;
using Stills.DataAccess;
using Stills.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stills.Controllers
{
    [ApiController]
    [Route("api/Photos")]
    public class PhotosController : ControllerBase
    {
        PhotosRepository _repo;

        public PhotosController(PhotosRepository repo)
        {
            _repo = repo;
        }

        [HttpPost]
        public IActionResult AddPhoto(Photo photo)
        {
            _repo.Add(photo);
            return Created($"api/Photos", photo);
        }
    }
}

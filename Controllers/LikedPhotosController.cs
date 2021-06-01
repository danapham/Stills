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
    [Route("api/LikedPhotos")]
    public class LikedPhotosController : Controller
    {
        LikedPhotosRepository _repo;

        public LikedPhotosController(LikedPhotosRepository repo)
        {
            _repo = repo;
        }

        [HttpPost]
        public IActionResult AddLikedPhoto(LikedPhoto likedPhoto)
        {
            _repo.Add(likedPhoto);

            return Created($"api/LikedPhotos/{likedPhoto.Id}", likedPhoto);
        }
    }
}

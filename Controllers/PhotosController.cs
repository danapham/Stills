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

        [HttpGet]
        public IActionResult GetAll()
        {
            var photos = _repo.GetAll();

            return Ok(photos);

        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var photo = _repo.GetById(id);

            if (photo == null)
            {
                return NotFound("This photo id does not exist.");
            }

            return Ok(photo);
        }

        [HttpGet("user/{fbId}")]
        public IActionResult GetByFbId(string fbId)
        {
            var photos = _repo.GetByUserFbId(fbId);

            if (photos == null)
            {
                return NotFound("This user has no photos.");
            }

            return Ok(photos);
        }

        [HttpGet("topVoted")]
        public IActionResult GetTopVoted()
        {
            var photos = _repo.GetTopTenVoted();

            return Ok(photos);
        }
    }
}

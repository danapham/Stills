using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stills.Models
{
    public class LikedPhoto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int PhotoId { get; set; }
    }
}

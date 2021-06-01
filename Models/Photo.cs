using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stills.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int CategoryId { get; set; }
        public User User { get; set; }
        public Category Category { get; set; }
        public string Title { get; set; }
        public string PhotoUrl { get; set; }
        public int TotalVotes { get; set; }
    }
}

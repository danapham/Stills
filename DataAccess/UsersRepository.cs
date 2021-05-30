using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace Stills.DataAccess
{
    public class UsersRepository
    {
        readonly string ConnectionString;

        public UsersRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("Stills");
        }
    }
}

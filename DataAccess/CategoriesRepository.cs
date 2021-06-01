using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Stills.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stills.DataAccess
{
    public class CategoriesRepository
    {
        readonly string ConnectionString;

        public CategoriesRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("Stills");
        }

        public IEnumerable<Category> GetAll()
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"select * from Categories";

            var categories = db.Query<Category>(sql);

            return categories;
        }
    }
}

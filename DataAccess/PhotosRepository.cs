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
    public class PhotosRepository
    {
        readonly string ConnectionString;

        public PhotosRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("Stills");
        }

        public void Add(Photo photo)
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"INSERT INTO [dbo].[Photos]
                               ([UserId]
                               ,[CategoryId]
                               ,[Title]
                               ,[PhotoUrl]
                               ,[TotalVotes])
                        OUTPUT inserted.id 
                        VALUES
                               (@userId
                               ,@categoryId
                               ,@title
                               ,@photoUrl
                               ,@totalVotes)";

            var id = db.ExecuteScalar<int>(sql, photo);

            photo.Id = id;
        }
    }
}

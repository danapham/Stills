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
    public class LikedPhotosRepository
    {
        readonly string ConnectionString;

        public LikedPhotosRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("Stills");
        }

        public void Add(LikedPhoto likedPhoto)
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"INSERT INTO [dbo].[LikedPhotos]
                               ([UserId]
                               ,[PhotoId])
                        OUTPUT inserted.id
                        VALUES
                               (@userId
                               ,@photoId)";

            var id = db.ExecuteScalar<int>(sql, likedPhoto);

            likedPhoto.Id = id;
        }
    }
}

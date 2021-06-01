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

        public IEnumerable<LikedPhoto> GetSingleLikedPhoto(string fbId, int photoId)
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"SELECT * from LikedPhotos l
                        left join Users u
	                        on u.Id = l.UserId
                        left join Photos p
	                        on p.Id = l.PhotoId
                        Where u.FirebaseId = @fbId AND l.PhotoId = @photoId";

            var likedPhoto = db.Query<LikedPhoto, User, Photo, LikedPhoto>(sql,
                (likedPhoto, user, photo) =>
                {
                    likedPhoto.User = user;
                    likedPhoto.Photo = photo;

                    return likedPhoto;
                }, new { fbId, photoId });

            return likedPhoto;
        }
    }
}

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

        public IEnumerable<Photo> GetAll()
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"select * from Photos p
                        left join [Users] u
	                        on u.Id = p.UserId
                        left join Categories c
	                        on c.Id = p.CategoryId";

            var photos = db.Query<Photo, User, Category, Photo>(sql,
                (photo, user, category) =>
                {
                    photo.User = user;
                    photo.Category = category;

                    return photo;
                });

            return photos;
        }

        public IEnumerable<Photo> GetById(int id)
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"select * from Photos p
                        left join [Users] u
	                        on u.Id = p.UserId
                        left join Categories c
	                        on c.Id = p.CategoryId
                        where p.Id = @id";

            var photo = db.Query<Photo, User, Category, Photo>(sql,
                (photo, user, category) =>
                {
                    photo.User = user;
                    photo.Category = category;

                    return photo;
                }, new { id });

            return photo;

        }

        public IEnumerable<Photo> GetByUserFbId(string userFbId)
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"select * from Photos p
                        left join [Users] u
	                        on u.Id = p.UserId
                        left join Categories c
	                        on c.Id = p.CategoryId
                        where u.FirebaseId = @userFbId";

            var photos = db.Query<Photo, User, Category, Photo>(sql,
                (photo, user, category) =>
                {
                    photo.User = user;
                    photo.Category = category;

                    return photo;
                }, new { userFbId });

            return photos;
        }

        public IEnumerable<Photo> GetTopTenVoted()
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"select top 10 * from Photos p
                        left join [Users] u
	                        on u.Id = p.UserId
                        left join Categories c
	                        on c.Id = p.CategoryId
                        order by p.TotalVotes desc";

            var photos = db.Query<Photo, User, Category, Photo>(sql,
                (photo, user, category) =>
                {
                    photo.User = user;
                    photo.Category = category;

                    return photo;
                });

            return photos;
        }

        public void Update(Photo photo)
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"UPDATE [dbo].[Photos]
                        SET [UserId] = @userId
                          ,[CategoryId] = @categoryId
                          ,[Title] = @title
                          ,[PhotoUrl] = @photoUrl
                          ,[TotalVotes] = @totalVotes
                        WHERE Id = @id";

            db.Execute(sql, photo);
        }

    }
}

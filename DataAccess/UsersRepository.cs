using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Stills.Models;

namespace Stills.DataAccess
{
    public class UsersRepository
    {
        readonly string ConnectionString;

        public UsersRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("Stills");
        }

        public void Add(User user)
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"INSERT INTO [dbo].[Users] ([FirebaseId],[FirstName],[LastName],[ImageUrl],[Email],[IsActive])
                            OUTPUT inserted.id
                            VALUES(@FirebaseId, @FirstName, @LastName, @ImageUrl, @Email, @IsActive)";

            var id = db.ExecuteScalar<int>(sql, user);

            user.Id = id;
        }

        public IEnumerable<User> GetByFbId(string firebaseId)
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"select * from Users
                        where FirebaseId = @firebaseId";

            var user = db.Query<User>(sql, new { firebaseId });

            return user;
        }

        public void Update(User user)
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"UPDATE [dbo].[Users]
                           SET [FirebaseId] = @firebaseId
                              ,[FirstName] = @firstName
                              ,[LastName] = @lastName
                              ,[ImageUrl] = @imageUrl
                              ,[Email] = @email
                              ,[IsActive] = @isActive
                            WHERE [FirebaseId] = @firebaseId";

            db.Execute(sql, user);
        }
         
    }
}

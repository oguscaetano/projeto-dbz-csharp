using Microsoft.EntityFrameworkCore;
using Xablau.Models;

namespace Xablau.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Personagem> XablauDB { get; set; }
    }
}
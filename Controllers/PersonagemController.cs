using Microsoft.AspNetCore.Mvc;
using Xablau.Data;
using Xablau.Models;

namespace Xablau.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonagemController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public PersonagemController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpPost]
        public async Task<IActionResult> AddPersonagem(Personagem personagem)
        {
            if (personagem == null) {
                return BadRequest("Dados inválidos!");
            }

            _appDbContext.XablauDB.Add(personagem);
            await _appDbContext.SaveChangesAsync();

            return StatusCode(201, personagem);
        }
    }
}
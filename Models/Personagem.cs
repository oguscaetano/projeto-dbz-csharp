using System.ComponentModel.DataAnnotations;

namespace Xablau.Models
{
    public class Personagem
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatório.")]
        [MaxLength(50, ErrorMessage = "O nome precisa ter no máximo 50 caracteres.")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatório.")]
        [MaxLength(50, ErrorMessage = "O tipo precisa ter no máximo 30 caracteres.")]
        public string Tipo { get; set; }
    }
}
const database = require('../models')
class PessoaController {
  static async pegaTodasPessoas (req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll()
      return res.status(200).json(todasAsPessoas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaPessoa (req, res) {
    const { id } = req.params
    try {
      const umaPessoa = await database.Pessoas.findOne({ where: { id: Number(id) } })
      return res.status(200).json(umaPessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaPessoa (req, res) {
    const novaPessoa = req.body
    try {
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
      return res.status(200).json(novaPessoaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaPessoa (req, res) {
    const novasInfos = req.body
    const { id } = req.params
    try {
      await database.Pessoas.update(novasInfos, { where: { id: Number(id) } })
      const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } })
      return res.status(200).json(pessoaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaPessoa (req, res) {
    const { id } = req.params
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `Id ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaMatricula (req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      const umaMatricula = await database.Matriculas.findOne({
        where:
        {
          id: Number(matriculaId),
          estudanteId: Number(estudanteId)
        }
      })
      return res.status(200).json(umaMatricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaMatricula (req, res) {
    const { estudanteId } = req.body
    const novaMatricula = { ...req.body, estudanteId: Number(estudanteId) }
    try {
      const novaMatriculaCriada = await database.Pessoas.create(novaMatricula)
      return res.status(200).json(novaMatriculaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PessoaController

const company = require("./models/company")

const resolvers = {
    Query: {
     async getUser (root, { id_user }, { models }) {
      return models.user.findByPk(id_user)
    },
     async getAllUsers (root, args, { models }){
      return models.user.findAll()
    },
     async getRol (root, { id_rol }, { models }) {
      return models.rol.findByPk(id_rol)
    },
    async getCompany (root, { id_company }, { models }) {
        return models.company.findByPk(id_company)
      }
  },
  Mutation: {
    async createCompany ( { input }) {
      const newCompany = new company(input)
      console.log(newCompany)
      return null
  },
    },
    User: {
      async rol(rol) {
       return rol.getRol()
    }
  },
  Rol: {
     async user(user) {
      return user.getUser()
    }
  },
  }
  
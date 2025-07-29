const UserRepository = require('../repositories/UserRepository');

class UserController {
  async index(req, res) {
    const users = await UserRepository.findAll();
    res.json(users);
  }

  async show(req, res) {
    const user = await UserRepository.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  }

  async create(req, res) {
    try {
      const user = await UserRepository.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({'error' : error.message});
    }
  }

  async update(req, res) {
    const user = await UserRepository.update(req.params.id, req.body);
    res.json(user);
  }

  async destroy(req, res) {
    await UserRepository.delete(req.params.id);
    res.json({ message: 'User deleted' });
  }
}

module.exports = new UserController();

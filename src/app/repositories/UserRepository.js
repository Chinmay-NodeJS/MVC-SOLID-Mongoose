const BaseRepository = require('../../core/BaseRepository');
const User = require('../models/UserModel');

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  async findByEmail(email) {
    return await this.model.findOne({ email });
  }
}

module.exports = new UserRepository();

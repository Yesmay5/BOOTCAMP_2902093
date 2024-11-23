import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';



@Injectable()
export class UsersService {

  //inyectar: obtener una isntancia del
  //repositorio como atributo de 
  //la clase BotcampsService: sin
  //necesidad de instanciarlo
  constructor(@InjectRepository(User)
    private UsersRepository:
      Repository<User>  ){

    }

  create(payload: any) {
    //1.Crear una instancia de una entity bootcamp 
    //bootcampm
    const newUsers = this.
    UsersRepository.
                        create(payload);
    //2. grabar esa instancia y retornarla
    return  this.
    UsersRepository.
            save(newUsers)
  }

  findAll() {
    return this.UsersRepository.find()
  }

  findOne(id: number) {
    return this.UsersRepository.findOneBy({id}) ;
  }

  async update(id: number, payload: any) {
    const updUsers = await this.UsersRepository.findOneBy({id}) ; 
  
    this.UsersRepository.merge(updUsers , payload)

    return this.UsersRepository.save(updUsers)
  }

  async remove(id: number) {
    const delUsers = await this.UsersRepository.findOneBy({id});

    this.UsersRepository.delete(delUsers)

    return delUsers 
  }
}

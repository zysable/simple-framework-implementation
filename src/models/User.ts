import { Model } from './Model'
import { Attributes } from './Attributes'
import { ApiSync } from './ApiSync'
import { Eventing } from './Eventing'
import { Collection } from './Collection'

export interface UserProps {
  id?: number
  name?: string
  age?: number
}

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new ApiSync<UserProps>(),
      new Eventing()
    )
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>((json: UserProps) =>
      User.buildUser(json)
    )
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 101)
    this.set({ age })
  }
}

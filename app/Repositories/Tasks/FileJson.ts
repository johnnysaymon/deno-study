import { CasualDB } from "https://deno.land/x/casualdb@0.1.1/mod.ts"
import DataAccess from './../../Interactors/Tasks/DataAccess.ts'
import Repository from './../../Interactors/Tasks/Repository.ts'

export default class implements Repository
{
  private readonly filePath = 'storages/database/tasks.json'
  private db: CasualDB<Schema>

  public constructor()
  {
    this.db = new CasualDB<Schema>()
  }

  public save(data: DataAccess): Promise<boolean>
  {
    return new Promise(async (resolve, reject) => {
      await this.db.connect(this.filePath)
      await this.db.seed({
        tasks: [
          {title: 'Teste', description: 'Teste', creatAt: 'Teste'}
        ]
      })
      await this.db.write('tasks', {title:"teste", description:"teste", creatAt:"ok"})

      resolve(true)
    })
  }
}

interface Schema
{
  'tasks': Array<{
    'title': string,
    'description': string,
    'creatAt': string
  }>
}

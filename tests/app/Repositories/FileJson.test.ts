import { assert, assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { delay } from "https://deno.land/std/async/delay.ts";
import DataAccess from '../../../app/Interactors/Tasks/DataAccess.ts';
import RepositoryFileJson from '../../../app/Repositories/Tasks/FileJson.ts'

Deno.test("testing save", async () => {
  const data: DataAccess = {
    'title': 'Title Example',
    'description': 'Description Example',
    'createdAt': new Date()
  };
  const repository = new RepositoryFileJson()

  const result = await repository.save(data)

  assertEquals(true, result);
});

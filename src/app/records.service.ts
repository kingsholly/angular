import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
info1: string[] = ["Adam Taylor", "E223", "aji@inc.net"]
info2: string[] = ["Coreela Fliun", "E224", "corell@inc.net"]
info3: string[] = ["Adamic Ryler", "E225", "ryrler@inc.net"]

getinfo1(): string[] {
  return this.info1
}
getinfo2(): string[] {
  return this.info2
}
getinfo3(): string[] {
  return this.info3
}
  constructor() { }
}

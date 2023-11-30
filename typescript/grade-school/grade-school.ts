interface Grade {
  [key: number]: string[];
}

export class GradeSchool {
  private schoolDB: Grade = {};

  roster() {
    return structuredClone(this.schoolDB);
  }

  add(student: string, grade: number): void {
    this.onlyOne(student);

    if (this.schoolDB[grade]) {
      this.schoolDB[grade].push(student);
    } else {
      this.schoolDB[grade] = [student];
    }
    this.schoolDB[grade].sort();
  }

  private onlyOne(student: string): void {
    for (let grade in this.schoolDB) {
      let names = this.schoolDB[grade];
      if (names.indexOf(student) !== -1) {
        names.splice(names.indexOf(student), 1);
        break;
      }
    }
  }

  grade(id: number): string[] {
    const copySchoolDB = structuredClone(this.schoolDB);
    if (!copySchoolDB[id]) {
      return [];
    }
    return copySchoolDB[id].sort();
  }
}

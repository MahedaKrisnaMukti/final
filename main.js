function process_argv() {
  const { argv } = process;
  const result = studentPortal(argv[2]);

  return result;
}

function studentPortal(studentId) {
  const studentList = [
    {
      id: "2010310164",
      name: "Rakanda Pangeran Nasution",
      gpa: 2.65,
      status: false,
    },

    {
      id: "2011310021",
      name: "Yosef Noferianus Gea",
      gpa: 3.1,
      status: true,
    },

    {
      id: "2014310100",
      name: "Angelia",
      gpa: 1.25,
      status: true,
    },

    {
      id: "2011320090",
      name: "Dito Bagus Prasetio",
      gpa: 2.75,
      status: true,
    },

    {
      id: "2011320100",
      name: "Hikman Nurahman",
      gpa: 2.45,
      status: true,
    },

    {
      id: "2010320181",
      name: "Edizon",
      gpa: 1.95,
      status: true,
    },

    {
      id: "2012320055",
      name: "Marrisa Stella",
      gpa: 3.5,
      status: false,
    },

    {
      id: "2012330080",
      name: "Dea Christy Keliat",
      gpa: 3,
      status: true,
    },

    {
      id: "2013330049",
      name: "Sekarini Mahyaswari",
      gpa: 3.5,
      status: true,
    },

    {
      id: "2012330004",
      name: "Yerica",
      gpa: 3.15,
      status: false,
    },
  ];

  let student = null;

  studentList.forEach((row) => {
    console.log(studentId);
    if (studentId == row.id) {
      student = row;
    }
  });

  // * Jika data tidak ditemukan
  if (student == null) {
    return "Mahasiswa tidak terdaftar";
  }
  // * Jika data ditemukan
  else {
    // * Jika statusnya false
    if (student.status == false) {
      return "Mahasiswa dengan id " + student.id + " sudah tidak aktif";
    }

    let credit = getCredits(student.gpa);
    let subject = getSubjects(credit);

    student.credits = credit;
    student.subjects = subject;

    return student;
  }
}

function getCredits(gpa) {
  if (gpa > 2.99) {
    return 24;
  } else if (gpa > 2.49) {
    return 21;
  } else if (gpa > 1.99) {
    return 18;
  } else if (gpa > 1.49) {
    return 15;
  } else {
    return 12;
  }
}

function getSubjects(credits) {
  const subjectsList = [
    {
      subjectName: "Ilmu Politik",
      credit: 3,
      status: "wajib",
    },

    {
      subjectName: "Ilmu Ekonomi",
      credit: 3,
      status: "wajib",
    },

    {
      subjectName: "Estetika",
      credit: 1,
      status: "pilihan",
    },

    {
      subjectName: "Kepemimpinan",
      credit: 3,
      status: "wajib",
    },

    {
      subjectName: "Etika",
      credit: 2,
      status: "pilihan",
    },

    {
      subjectName: "Sosiologi",
      credit: 3,
      status: "wajib",
    },

    {
      subjectName: "Teori Pengambil keputusan",
      credit: 3,
      status: "wajib",
    },

    {
      subjectName: "Statistika",
      credit: 3,
      status: "wajib",
    },

    {
      subjectName: "Aplikasi IT",
      credit: 3,
      status: "pilihan",
    },
  ];

  let subject = [];

  // * Looping data yang statusnya wajib
  subjectsList.forEach((row) => {
    if (row.status == "wajib") {
      if (credits >= row.credit) {
        subject.push(row);
        credits = credits - row.credit;
      }
    }
  });

  // * Looping data yang statusnya pilihan dengan credit 3
  if (credits > 0) {
    subjectsList.forEach((row) => {
      if (row.status == "pilihan" && row.credit == 3) {
        if (credits >= row.credit) {
          subject.push(row);
          credits = credits - row.credit;
        }
      }
    });
  }

  // * Looping data yang statusnya pilihan dengan credit 2
  if (credits > 0) {
    subjectsList.forEach((row) => {
      if (row.status == "pilihan" && row.credit == 2) {
        if (credits >= row.credit) {
          subject.push(row);
          credits = credits - row.credit;
        }
      }
    });
  }

  // * Looping data yang statusnya pilihan dengan credit 1
  if (credits > 0) {
    subjectsList.forEach((row) => {
      if (row.status == "pilihan" && row.credit == 1) {
        if (credits >= row.credit) {
          subject.push(row);
          credits = credits - row.credit;
        }
      }
    });
  }

  return subject;
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = {
  studentPortal,
  getSubjects,
  getCredits,
};

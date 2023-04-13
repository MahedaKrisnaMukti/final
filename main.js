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

  if (!student) {
    return "Mahasiswa tidak terdaftar";
  } else if (!student.status) {
    return `Mahasiswa dengan id ${studentId} sudah tidak aktif`;
  } else {
    const credits = getCredits(student.gpa);
    const subjects = getSubjects(credits).map((subject) => {
      return {
        subjectName: subject.name,
        credit: subject.credit,
        status: subject.status,
      };
    });
    const result = {
      id: student.id,
      name: student.name,
      gpa: student.gpa,
      credits: credits,
      subjects: subjects,
    };
    return result;
  }
}

function getCredits(gpa) {
  if (gpa > 2.99) {
    return 24;
  } else if (gpa > 2.49) {
    return 21;
  } else if (gpa > 1.99) {
    return 18;
  } else {
    return 15;
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

  let credits = getCredits(gpa);
  let selectedSubjects = subjects.filter((subjects) => {
    if (subject.status === "wajib" || credits >= subject.credit) {
      credits -= subject.credit;
      return true;
    }
    return false;
  });
  return selectedSubjects;
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

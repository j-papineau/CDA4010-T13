

export interface WorkXP {
    company: string;
    start: string;
    end: string;
    position: string;
    duties: string;
  }

export interface MasterData {
    personalInfo: PersonalInfo;
    militaryInfo: MilitaryService
    jobReqs: JobReqs;
    education: Education[];
    work: WorkXP[];
    skills: Skill[];
    tcAccepted: boolean
}

export interface PersonalInfo {
    name: Name;
    email: string;
    phoneMobile: string;
    phoneHome: string;
    address: Address;
}

export interface MilitaryService {
    didServe: boolean;
    info: string
}

export interface Name {
    title: string;
    first: string;
    mi: string;
    last: string
}

export interface Address {
    address: string;
    city: string;
    zip: string;
    state: string;
}

export interface JobReqs {
    availability: string[]
    oldEnough: boolean;
    license: boolean;
    liftTwenty: boolean;
    trafficIncident: boolean;
    dui: boolean; 
    employmentType: string;
    salaryReq: string;
    startDate: string;
}

export interface Skill {
    name: string;
    level: string;
}

export interface Education {
    name: string;
    degree: string;
    major: string;
    graduation: string;
    completed: boolean;
  }

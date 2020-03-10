import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-clickevent',
  templateUrl: './clickevent.component.html',
  styleUrls: ['./clickevent.component.css']
})
export class ClickeventComponent implements OnInit {
  public customergrid = '1';
 public activebutton = 'Customer';
  constructor(private __router: Router, private activatedRoute: ActivatedRoute, ) {
    let params: any = this.activatedRoute.snapshot.params;
    this.activatedRoute = params.id;
  }
  customerdetails = function (Customer) {
    switch (Customer) {
      case "Customer":
        this.customergrid = '1';
        this.activebutton = 'Customer';
        this.__router.navigateByUrl('clickevent/Customer');
        // this.txtinputfileds1 = '';
        // this.txtinputfileds2 = '';
        // this.txtinputfileds3 = '';
        // this.txtinputfileds4 = '';
        // this.txtinputfileds5 = '';
        // this.txtinputfileds6 = '';
        // this.txtinputfileds7 = '';
        // this.txtinputfileds8 = '';
        // this.txtinputfileds9 = '';
        // this.txtinputfileds10 = '';
        break;
      case "father":
        this.customergrid = '2';
        this.activebutton = 'father';
        this.__router.navigateByUrl('clickevent/father');
        // this.txtinputfileds2 = '';
        break;
      case "mother":
        this.customergrid = '3';
        this.activebutton = 'mother';
        this.__router.navigateByUrl('clickevent/mother');
        break;
      case "spouse":
        this.customergrid = '4';
        this.activebutton = 'spouse';
        this.__router.navigateByUrl('clickevent/spouse');
        break;
      case "allfields":
        this.customergrid = '5';
        this.activebutton = 'allfields';
        this.__router.navigateByUrl('clickevent/allfields');
        break;
      case "cbrother":
        this.customergrid = '6';
        this.activebutton = 'cbrother';
        this.__router.navigateByUrl('clickevent/cbrother');
        break;
      case "csister":
        this.customergrid = '7';
        this.activebutton = 'csister';
        this.__router.navigateByUrl('clickevent/csister');
        break;
      case "fbsister":
        this.customergrid = '8';
        this.activebutton = 'fbsister';
        this.__router.navigateByUrl('clickevent/fbsister');
        break;
      case "mbsister":
        this.customergrid = '9';
        this.activebutton = 'mbsister';
        this.__router.navigateByUrl('clickevent/mbsister');
        break;
      case "reference":
        this.customergrid = '10';
        this.activebutton = 'reference';
        this.__router.navigateByUrl('clickevent/reference');
        break;
      case "partner":
        this.customergrid = '11';
        this.activebutton = 'partner';
        this.__router.navigateByUrl('clickevent/partner');
        break;
    }


  };
  onchangeselectlistvalues = function (value, appenvalue, checkvalue) {
    checkvalue = checkvalue === false ? true : false;
    if (value === "C Personal All" || value === 'C Education All' || value === 'C profession All' || value === 'C Astro All' || value === 'C Property All'
      || value === 'Father All' || value === 'Mother All' || value === 'Spouse All'
      || value === 'Customer Brother All' || value === 'Customer Sister All'
      || value === 'Father Brother All' || value === 'Father Sister All'
      || value === 'Mother Brother All' || value === 'Mother Sister All'
      || value === 'Reference All'


    ) {

      this.OnSelectAllCheckUnCheckBoxes(value, appenvalue, checkvalue);
    }
  };
  OnSelectAllCheckUnCheckBoxes = function (value, appenvalue, checkvalue) {


    let iArrayCount = 0;
    let iArrayFrom = 0;
    let iArrayTo = 0;



    switch (value) {

      case "C Personal All":
        this.CheckPersonalDetails = checkvalue === true ? '1' : '';
        iArrayCount = 1; iArrayTo = 17;

        break;

      case 'C Education All':
        this.CheckEducationDetails = checkvalue === true ? '18' : '';
        iArrayCount = 18; iArrayTo = 34;
        break;

      case 'C profession All':
        this.Checkuncheckboxes = checkvalue === true ? '35' : '';
        iArrayCount = 35; iArrayTo = 55;
        break;

      case 'C Astro All':
        this.CheckAstroDetails = checkvalue === true ? '56' : '';
        iArrayCount = 56; iArrayTo = 69;
        break;

      case 'C Property All':
        this.CheckPropertyDetails = checkvalue === true ? '70' : '';
        iArrayCount = 70; iArrayTo = 89;
        break;

      //
      case 'Father All':
        this.CheckFatherAll = checkvalue === true ? '90' : '';
        iArrayCount = 90; iArrayTo = 103;
        break;

      case 'Mother All':
        this.CheckMotherAll = checkvalue === true ? '104' : '';
        iArrayCount = 104; iArrayTo = 118;
        break;

      //
      case 'Spouse All':
        this.CheckSpouseAll = checkvalue === true ? '205' : '';
        iArrayCount = 205; iArrayTo = 219;
        break;

      case 'Customer Brother All':
        this.CheckCustomerBrotherAll = checkvalue === true ? '119' : '';
        iArrayCount = 119; iArrayTo = 140;
        break;

      case 'Customer Sister All':

        this.CheckCustomerSisterAll = checkvalue === true ? '141' : '';
        iArrayCount = 141; iArrayTo = 162;

        break;

      case 'Father Brother All':
        this.CheckFatherBrotherAll = checkvalue === true ? '163' : '';
        iArrayCount = 163; iArrayTo = 170;

        break;

      case 'Father Sister All':
        this.CheckFatherSisterAll = checkvalue === true ? '171' : '';
        iArrayCount = 171; iArrayTo = 183;

        break;

      case 'Mother Brother All':

        this.CheckMotherBrotherAll = checkvalue === true ? '184' : '';
        iArrayCount = 184; iArrayTo = 191;

        break;

      case 'Mother Sister All':
        this.CheckMotherSisterAll = checkvalue === true ? '192' : '';
        iArrayCount = 192; iArrayTo = 204;
        break;

      case 'Reference All':
        this.CheckReferenceAll = checkvalue === true ? '227' : '';
        iArrayCount = 227; iArrayTo = 240;
        break;

      default:
        iArrayCount = 1; iArrayFrom = 0; iArrayTo = 0;
        break;

    }



    for (iArrayCount; iArrayCount < iArrayTo; iArrayCount++) {
      // if( iArrayCount === 1 || iArrayCount === 18 || iArrayCount ===35  || iArrayCount ===56  || iArrayCount === 70   )
      // {

      //     this.Checkuncheckboxes = 0;
      // }
      // else{
      //     this.Checkuncheckboxes = checkvalue ===true ? '1' :'';
      // }

      this.Searchfields[iArrayCount].checkvalue = checkvalue === false ? false : true;

    }

  };
  Searchfields = [
    { checkvalue: false, Text: "C Personal All", value: "CPersonalAll", style: 'colorgreen', apeendVal: 'C Personal All' },
    { checkvalue: false, Text: "C Sur Name", value: "CLName", style: 'redcolor', apeendVal: ' Name Of the Candidate' },
    { checkvalue: false, Text: "C Name", value: "CFName", style: 'redcolor', apeendVal: 'Name Of the Candidate' },
    { checkvalue: false, Text: "C DOB", value: "CDOB", style: 'redcolor', toolTip: 'DD-MM-YYYY', apeendVal: 'DD-MM-YYYY' },
    { checkvalue: false, Text: "C Religion", value: "CRelision", style: 'redcolor', apeendVal: 'Hindu, Christian, Muslim, Other, ЕЕ.. etc' },
    { checkvalue: false, Text: "C Mother Tongue - Astro", value: "CMotherTongue", style: 'redcolor', apeendVal: 'Telugu, Tamil, Kannada, Hindi, Punjabi, Urdu, . . . . . . etc' },
    { checkvalue: false, Text: "C Sub Caste", value: "CSubCaste", style: 'redcolor', apeendVal: 'Kamma, Converted Christian, GAVARA, GAJULU, Converted Christian, surya balija, Converted Christian, VANNE, Christian, ЕЕ. etc' },

    { checkvalue: false, Text: "C Born Citizen", value: "CBornCitigen", style: 'redcolor', apeendVal: ' India, USA, UK, Canada, Australia, Singapore, ЕЕ..etc' },
    { checkvalue: false, Text: "C Physical Status", value: "CPhysicalStatus", style: 'redcolor', apeendVal: 'Normal, Physically Challenged' },
    { checkvalue: false, Text: "C About Me", value: "CAboutMe", style: 'redcolor', apeendVal: 'Memo Box for Candidate. Enter Not, disply all entered profiles.' },
    { checkvalue: false, Text: "C About Family", value: "CAboutFamily", style: 'redcolor', apeendVal: 'Memo Box for Candidate. Enter Not, disply all entered profiles.' },
    { checkvalue: false, Text: "C Body Type", value: "CBodyType", style: 'redcolor', apeendVal: 'Very Fair, Fair, Medium, Dark, Doesnt Matter, Light Brown' },
    { checkvalue: false, Text: "C Drink", value: "CDrink", style: 'redcolor', apeendVal: 'Yes, No, Occasional' },
    { checkvalue: false, Text: "C Diet", value: "CDiet", style: 'redcolor', apeendVal: 'Veg, Non Veg, Both' },
    { checkvalue: false, Text: "C Smoke", value: "CSmoke", style: 'redcolor', apeendVal: 'Yes, No, Occasional' },
    { checkvalue: false, Text: "C Sib Count (Bro)", value: "C_SibCount_Bro", style: 'redcolor', apeendVal: 'Number like (1, 2, 3)' },
    { checkvalue: false, Text: "C Sib Count (Sis)", value: "C_SibCount_Sis", style: 'redcolor', apeendVal: 'Number like (1, 2, 3)' },
    //
    // Education Details 17 to  34
    { checkvalue: false, Text: "C Education All", value: "CEducationAll", style: 'colorpink', apeendVal: 'Name Of the Candidate' },
    { checkvalue: false, Text: "C Edu Category", value: "CEducationCategory", style: 'redcolor', apeendVal: 'Bachelors in Engineering, Bachelors in Degree, Diploma, Doctorate/phd, Masters in Engineering, Bachelors in Medicine, Masters in Degree, Finance - ICWAI/CA/CS, ЕЕЕЕ.. etc or -BE, BTech, AMIE, Aeronautical Engineering, B Arch, B Phil, BCom, BSc, BA, BHM, BEd, Trade School, Diploma, Polytechnic, Phd, ЕЕЕЕ etc or EduSpecializationName, Electronics, Aeronautical And Aerospace, Agricultural, Computer Science, Chemical, Civil, Electricals and Electronics, Automobile, ЕЕЕЕЕЕ. etc' },
    { checkvalue: false, Text: "C Edu Group", value: "CEduGroup", style: 'redcolor', apeendVal: 'Bachelors in Engineering, Bachelors in Degree, Diploma, Doctorate/phd, Masters in Engineering, Bachelors in Medicine, Masters in Degree, Finance - ICWAI/CA/CS, ЕЕЕЕ.. etc or -BE, BTech, AMIE, Aeronautical Engineering, B Arch, B Phil, BCom, BSc, BA, BHM, BEd, Trade School, Diploma, Polytechnic, Phd, ЕЕЕЕ etc or EduSpecializationName, Electronics, Aeronautical And Aerospace, Agricultural, Computer Science, Chemical, Civil, Electricals and Electronics, Automobile, ЕЕЕЕЕЕ. etc' },
    { checkvalue: false, Text: "C Edu Specialization", value: "CEduSplecialization", style: 'redcolor', apeendVal: 'Bachelors in Engineering, Bachelors in Degree, Diploma, Doctorate/phd, Masters in Engineering, Bachelors in Medicine, Masters in Degree, Finance - ICWAI/CA/CS, ЕЕЕЕ.. etc or -BE, BTech, AMIE, Aeronautical Engineering, B Arch, B Phil, BCom, BSc, BA, BHM, BEd, Trade School, Diploma, Polytechnic, Phd, ЕЕЕЕ etc or EduSpecializationName, Electronics, Aeronautical And Aerospace, Agricultural, Computer Science, Chemical, Civil, Electricals and Electronics, Automobile, ЕЕЕЕЕЕ. etc' },
    { checkvalue: false, Text: "C Edu University", value: "CEduUniversity", style: 'redcolor', apeendVal: 'Dibrugarh University, Devi Ahilya Vishwavidyalaya, Dravidian University, Dr Babasaheb Ambedkar Technological, Dr Bhim Rao Ambedkar University, Doctor Harisingh Gour Vishwavidyalaya, Dr Ram Manohar Lohia Avadh University, Dr Yashwant Singh Parmar, Forest Research Institute, GUJARAT UNIVERSITY,  ЕЕЕ. etc' },
    { checkvalue: false, Text: "C Edu College", value: "CEduCollege", style: 'redcolor', apeendVal: 'MARUTHI POLYTECHNICAL COLLEGE, NIET Guntur, V R Siddhartha Engineering College, SRINIDHI ENGG COLLEGE, Narayana Jr College, KV uppal, VANITHA MAHA VIDYALAYA, REDDY COLLEGE, SIVASIVANI INSTITUTE OF MANAGEMENT, siddharda, sp college, Gandhi medical, . . . . . . . etc' },
    { checkvalue: false, Text: "C Edu Pass of Year", value: "CEduPass_Year", style: 'redcolor', apeendVal: 'YYYY' },
    { checkvalue: false, Text: "C Edu Country", value: "CEduCountry", style: 'redcolor', apeendVal: 'India, USA, UK, Canada, Australia, Singapore, ЕЕ..etc' },
    { checkvalue: false, Text: "C Edu State", value: "CEduState", style: 'redcolor', apeendVal: 'Alabama, Alaska, Andaman  and Nicobar, Andhra Pradesh, Ardsley, Arizona, Arkansas, Arunachal Pradesh, Assam, ЕЕ.. etc' },

    { checkvalue: false, Text: "C Edu District", value: "CEduDistrict", style: 'redcolor', apeendVal: 'Adilabad, Anantapur, Ariyalur, CHENGALPATTUMGR, Chennai, Chittoor, Coimbatore, Cuddalore, Dharmapuri, ЕЕ. etc' },
    { checkvalue: false, Text: "C Edu City", value: "CEduCity", style: 'redcolor', apeendVal: 'Addanki ,  ANDEVANAPALLI,  Attupakkam,  Bachannapet,  BESIDE SBH,  Challapalli,  Chennai,  Chennaraopet, ЕЕЕЕ etc' },


    { checkvalue: false, Text: "C Edu Merits", value: "CEduMerits", style: 'redcolor', apeendVal: 'Memo Box for Education' },
    { checkvalue: false, Text: "C Education School", value: "C_Edu_School_Study", style: 'redcolor', apeendVal: 'India, USA, UK, Canada, Australia, Singapore, ЕЕ..etc' },
    { checkvalue: false, Text: "C Education Intermediate", value: "C_Edu_Inter_Study", style: 'redcolor', apeendVal: 'India, USA, UK, Canada, Australia, Singapore, ЕЕ..etc' },
    { checkvalue: false, Text: "C Education Degree", value: "C_Edu_Degree_Study", style: 'redcolor', apeendVal: 'India, USA, UK, Canada, Australia, Singapore, ЕЕ..etc' },
    { checkvalue: false, Text: "C Education PG/Mater Degree", value: "C_Edu_PG_Study", style: 'redcolor', apeendVal: 'India, USA, UK, Canada, Australia, Singapore, ЕЕ..etc' },
    { checkvalue: false, Text: "C Education P.hd", value: "C_Edu_PHd_Study", style: 'redcolor', apeendVal: 'India, USA, UK, Canada, Australia, Singapore, ЕЕ..etc' },

    //Profession Details 34 to 55
    { checkvalue: false, Text: "C profession All", value: "CProfAll", style: 'colorprofession', apeendVal: '' },
    { checkvalue: false, Text: "C Employeed In", value: "EmployeedIn", style: 'redcolor', apeendVal: 'Private Company, Government/Public Sector, Defense / Civil Services, Business / Self Employed, Not Working , . . . . . . . . .  etc or Accounting / Banking / Finance, Administration & HR, Media & Entertainment, Agriculture, Airline & Aviation, Architecture & Design , . . . . . . . etc or Bank officer, Banking Professional, Chartered Accountant, Company Secretary, Finance Professional, Investment Professional , . . . . . . . etc' },
    { checkvalue: false, Text: "C Professional Group", value: "Professionalgroup", style: 'redcolor', apeendVal: 'Private Company, Government/Public Sector, Defense / Civil Services, Business / Self Employed, Not Working , . . . . . . . . .  etc or Accounting / Banking / Finance, Administration & HR, Media & Entertainment, Agriculture, Airline & Aviation, Architecture & Design , . . . . . . . etc or Bank officer, Banking Professional, Chartered Accountant, Company Secretary, Finance Professional, Investment Professional , . . . . . . . etc' },
    { checkvalue: false, Text: "C Profession", value: "Profession", style: 'redcolor', apeendVal: 'Private Company, Government/Public Sector, Defense / Civil Services, Business / Self Employed, Not Working , . . . . . . . . .  etc or Accounting / Banking / Finance, Administration & HR, Media & Entertainment, Agriculture, Airline & Aviation, Architecture & Design , . . . . . . . etc or Bank officer, Banking Professional, Chartered Accountant, Company Secretary, Finance Professional, Investment Professional , . . . . . . . etc' },
    { checkvalue: false, Text: "C Company Name", value: "Companyname", style: 'redcolor', apeendVal: 'Yamaha Company, Symphony Software Pvt Ltd, BRONDCOM CROP, ACCENTURE, FLEXTRONICS, SIEMENS LTD, GENPACT, MOBILE DIGICONV BUSINESS, . . . . . . . etc' },
    { checkvalue: false, Text: "C Salary Monthly From", value: "monthlysalary", style: 'redcolor', apeendVal: 'Number like (20000, 90000, 10000, . . . . . .etc)' },
    { checkvalue: false, Text: "C Salary Monthly To", value: "monthlysalary_To", style: 'redcolor', apeendVal: 'Number like (20000, 90000, 10000, . . . . . .etc)' },
    { checkvalue: false, Text: "C Country Working", value: "countryworking", style: 'redcolor', apeendVal: 'India, USA, UK, Canada, Australia, Singapore, ЕЕ..etc' },
    { checkvalue: false, Text: "C State Working", value: "stateworking", style: 'redcolor', apeendVal: 'Alabama, Alaska, Andaman  and Nicobar, Andhra Pradesh, Ardsley, Arizona, Arkansas, Arunachal Pradesh, Assam, ЕЕ.. etc' },
    { checkvalue: false, Text: "C District Working", value: "districtworking", style: 'redcolor', apeendVal: 'Adilabad, Anantapur, Ariyalur, CHENGALPATTUMGR, Chennai, Chittoor, Coimbatore, Cuddalore, Dharmapuri, ЕЕ. etc' },
    { checkvalue: false, Text: "C City Working", value: "cityworking", style: 'redcolor', apeendVal: 'Addanki ,  ANDEVANAPALLI,  Attupakkam,  Bachannapet,  BESIDE SBH,  Challapalli,  Chennai,  Chennaraopet, ЕЕЕЕ etc' },
    { checkvalue: false, Text: "C Working From Date", value: "workingfromdate", style: 'redcolor', toolTip: 'DD-MM-YYYY', apeendVal: 'MM/DD/YYYY' },
    { checkvalue: false, Text: "C Visa Status", value: "VisaStatus", style: 'redcolor', apeendVal: 'Student Visa, Work Permit, Temporary Visa, Citizen, Permanent Resident, Green Card, OPT' },
    { checkvalue: false, Text: "C Residing Since From", value: "Residingsincefrom", style: 'redcolor', toolTip: 'DD-MM-YYYY', apeendVal: 'DD-MM-YYYY' },
    { checkvalue: false, Text: "C Residing Since To", value: "ResidingsinceTo", style: 'redcolor', toolTip: 'DD-MM-YYYY', apeendVal: 'DD-MM-YYYY' },
    { checkvalue: false, Text: "C Arrival Date From", value: "Arrivaldatefrom", style: 'redcolor', toolTip: 'DD-MM-YYYY', apeendVal: 'MM/DD/YYYY' },
    { checkvalue: false, Text: "C Arrival Date To", value: "Arrivaldateto", style: 'redcolor', toolTip: 'DD-MM-YYYY', apeendVal: 'MM/DD/YYYY' },
    { checkvalue: false, Text: "C Arrival Between 100 Days", value: "C_ArrivalBetween100Days", style: 'redcolor', apeendVal: 'Enter 1 number' },
    { checkvalue: false, Text: "C Departure Date From", value: "Departuredatefrom", style: 'redcolor', toolTip: 'DD-MM-YYYY', apeendVal: 'MM/DD/YYYY' },
    { checkvalue: false, Text: "C Departure Date To", value: "DeparturedateTo", style: 'redcolor', toolTip: 'DD-MM-YYYY', apeendVal: 'MM/DD/YYYY' },
    { checkvalue: false, Text: "C Departure Between 100 Days", value: "C_DepartureBetween100Days", style: 'redcolor', apeendVal: 'Enter 1 number' },

    //Astro Details 55 to 69

    { checkvalue: false, Text: "C Astro All", value: "CAstroAll", style: 'colordark', apeendVal: '' },
    { checkvalue: false, Text: "C Time of Birth - Astro", value: "TimeofBirth", style: 'redcolor', apeendVal: '10-08-1992, ЕЕ..etc' },
    { checkvalue: false, Text: "C Country of Birth", value: "CCountryOfBirth", style: 'redcolor', apeendVal: 'India, USA, UK, Canada, Australia, Singapore, ЕЕ..etc' },
    { checkvalue: false, Text: "C State of Birth - Astro", value: "CStateOfBirth", style: 'redcolor', apeendVal: 'Alabama, Alaska, Andaman  and Nicobar, Andhra Pradesh, Ardsley, Arizona, Arkansas, Arunachal Pradesh, Assam, ЕЕ.. etc' },
    { checkvalue: false, Text: "C District of Birth - Astro", value: "CDistrictOfBirth", style: 'redcolor', apeendVal: 'Adilabad, Anantapur, Ariyalur, CHENGALPATTUMGR, Chennai, Chittoor, Coimbatore, Cuddalore, Dharmapuri, ЕЕ. etc' },
    { checkvalue: false, Text: "C City of Birth - Astro", value: "CCityOfBirth", style: 'redcolor', apeendVal: 'Addanki ,  ANDEVANAPALLI,  Attupakkam,  Bachannapet,  BESIDE SBH,  Challapalli,  Chennai,  Chennaraopet, ЕЕЕЕ etc' },
    { checkvalue: false, Text: "C Star Language - Astro", value: "CStarLanguage", style: 'redcolor', apeendVal: 'Telugu, Tamil, Kannada' },
    { checkvalue: false, Text: "C Star - Astro", value: "CStar", style: 'redcolor', apeendVal: 'Bharani, Krithika, Rohini, Mrigasira, Arudra, Punarvasu, . . . . . etc' },
    { checkvalue: false, Text: "C Paadam - Astro", value: "CPaadam", style: 'redcolor', apeendVal: '1,2,3,4' },
    { checkvalue: false, Text: "C Lagnam - Astro", value: "CLagnam", style: 'redcolor', apeendVal: 'Dhansu, Kanya, Karkatakam, Khumbam, Makhram, . . . . . . etc' },
    { checkvalue: false, Text: "C Raasi - Astro", value: "CRaasi", style: 'redcolor', apeendVal: 'Kanya, midhuna, karkataka, vrushaba, mesha, mesha, . . . . . . etc' },
    { checkvalue: false, Text: "C Gothram - Astro", value: "CGothram", style: 'redcolor', apeendVal: 'THURAN, Tharchutla, KANCHU MEKALA, PULIGORLU, THODELLA., NALAPAI, UNDIVELLA, PERUMAL GOTHARAM, . . . . . .  . etc' },
    { checkvalue: false, Text: "C Maternal Gothram - Astro", value: "CMaternalGothram", style: 'redcolor', apeendVal: 'SHADA MASTHRA, vinukula, pagadasila, Komalla, Jaanakula, jankula , Punersila, bharadhwajasa, . . . . . etc' },
    { checkvalue: false, Text: "C Kuja Dosham - Astro", value: "CKujadosham", style: 'redcolor', apeendVal: 'Yes, No' },

    //Property Details ---------------- >69 to 88

    { checkvalue: false, Text: "C Property All", value: "CPropertyAll", style: 'allfieldsred', apeendVal: '' },
    { checkvalue: false, Text: "C Family Status", value: "C_FamilyStatusGrade", style: 'redcolor', apeendVal: 'Lower Middle Class, Middle Class, Upper Middle Class, Rich, Affluent, Others, High Class' },

    { checkvalue: false, Text: "C property Type", value: "CpropertyType", style: 'redcolor', apeendVal: 'Family, shar' },
    { checkvalue: false, Text: "C Property From Value", value: "CPropertyValue", style: 'redcolor', apeendVal: 'Number like (20000, 90000, 10000, . . . . . .etc)' },
    { checkvalue: false, Text: "C Property To Value", value: "C_PropertyValue_To", style: 'redcolor', apeendVal: 'Number like (20000, 90000, 10000, . . . . . .etc)' },
    { checkvalue: false, Text: "C Property Description", value: "CPropertyDescription", style: 'redcolor', apeendVal: 'Memo Box of Property Description' },
    { checkvalue: false, Text: "C Parent Caste", value: "CParentCaste", style: 'redcolor', apeendVal: 'Kamma, Balija, Reddy, Kapu,  . . . . . .  etc' },
    { checkvalue: false, Text: "C Parent Inter Caste (Yes/No)", value: "C_ParentCaste", style: 'redcolor', apeendVal: 'Yes, No' },
    { checkvalue: false, Text: "C Father Caste", value: "C_FatherCaste", style: 'redcolor', apeendVal: 'Kamma, Balija, Reddy, Kapu,  . . . . . .  etc' },
    { checkvalue: false, Text: "C Mother Caste", value: "C_MotherName", style: 'redcolor', apeendVal: 'Kamma, Balija, Reddy, Kapu,  . . . . . .  etc' },
    { checkvalue: false, Text: "C Cont address", value: "C_ContactDetails", style: 'redcolor', apeendVal: 'ContactDetails' },
    { checkvalue: false, Text: "C Pincode", value: "C_Pincode", style: 'redcolor', apeendVal: 'AP-533342,AP 517247 ЕЕ..etc' },
    { checkvalue: false, Text: "C Registration Status", value: "CRegStatus", style: 'redcolor', apeendVal: 'Paid, Unpaid' },
    { checkvalue: false, Text: "C Website Status", value: "CWebsiteStatus", style: 'redcolor', apeendVal: 'allow, block' },
    { checkvalue: false, Text: "C Date of Reg", value: "CDateofReg", style: 'redcolor', toolTip: 'DD-MM-YYYY', apeendVal: 'DD-MM-YYYY from DD-MM-YYYY' },
    { checkvalue: false, Text: "C Branch", value: "CBranch", style: 'redcolor', apeendVal: 'Hyderabad - Ameerpet, Hyderabad-Dilsukhnagar, Hyderabad-Kukatpally, Vijayawada, BENGALURU - JAYANAGAR, Bengaluru - Shivananda, ЕЕЕЕЕ. Etc or HD, HA, HZ, VA, B2, BE, ЕЕЕЕЕ. Etc.' },
    { checkvalue: false, Text: "C Family Grade", value: "CFamilyGrade", style: 'redcolor', apeendVal: 'A, B, C, D' },


    { checkvalue: false, Text: "C Photo Grade", value: "CPhotoGrade", style: 'redcolor', apeendVal: 'A, B, C, D' },
    { checkvalue: false, Text: "C Property Grade", value: "CPropertyGrade", style: 'redcolor', apeendVal: 'A, B, C, D' },
    { checkvalue: false, Text: "C Profile Grade", value: "C_ProfileGrade", style: 'redcolor', apeendVal: 'A, B, C, D' },



    //----------------------->


    // father --- 89  to 103
    { checkvalue: false, Text: "Father All", value: "FatherAll", style: 'DarkMagenta ', apeendVal: '' },
    { checkvalue: false, Text: "F Name Edu Prof", value: "FAllFields", style: 'lightbluecolor', apeendVal: 'Enter Father Name, Education and Profession' },
    { checkvalue: false, Text: "F Name", value: "FFirstName", style: 'lightbluecolor', apeendVal: 'Father Sur Name and LastName' },
    { checkvalue: false, Text: "F Education", value: "FEducationDetails", style: 'lightbluecolor', apeendVal: 'Memo Box for Father Education (BA,  BCom,  BE( Civil ),  BE( Mechanical ),  BCom( General ),  BE( Electronics ),  BCom( Accounts ),  BSc( Chemistry ),  Below Graduation,  BSc( Bzc ), . . . . . . . . Etc)' },
    { checkvalue: false, Text: "F Profession", value: "FProfessionDetails", style: 'lightbluecolor', apeendVal: 'RETD STORES OFFICER B.H.P.V,  MANAGER,   Assistant Director,  RETIRED LIC OFFICER,   Agriculture,   Central Govt Employee,   Engineer - Non IT, . . . . . . etc' },
    { checkvalue: false, Text: "F Company Name", value: "FCompanyId", style: 'lightbluecolor', apeendVal: 'Yamaha Company, Symphony Software Pvt Ltd, BRONDCOM CROP, ACCENTURE, FLEXTRONICS, SIEMENS LTD, GENPACT, MOBILE DIGICONV BUSINESS, . . . . . . . etc' },
    { checkvalue: false, Text: "F Job Location", value: "FJobLocation", style: 'lightbluecolor', apeendVal: 'ASHOKNAGAR, KANURU, VIJAYAWADA, NEAR PAPPULA MILL,  BANGALORE,  Bellary,  BENGALURU, Public Industries,  BODINAYAKANNUR,  DOING BUSINESS AND  AGRICULTURE AT VISAKHAPATNAM,  ELURU,  Gudlavalleru,  Guntakal, . . . . . . . . etc' },
    { checkvalue: false, Text: "F Mobile/LandLine", value: "FNumber", style: 'lightbluecolor', apeendVal: 'Phone Number' },
    { checkvalue: false, Text: "F Email", value: "Femail", style: 'lightbluecolor', apeendVal: 'EmailID' },
    { checkvalue: false, Text: "FF Name", value: "FFatherName", style: 'lightbluecolor', apeendVal: 'Father Father Name, Mother Father Sur Name and Mother Father Name' },
    { checkvalue: false, Text: "FF Mobile/Landline", value: "FFatherContactNumber", style: 'lightbluecolor', apeendVal: 'Phone Number' },
    { checkvalue: false, Text: "FF State", value: "FFStateName", style: 'lightbluecolor', apeendVal: '(FF State + MF State). Alabama, Alaska, Andaman  and Nicobar, Andhra Pradesh, Ardsley, Arizona, Arkansas, Arunachal Pradesh, Assam, ЕЕ.. etc' },
    { checkvalue: false, Text: "FF District", value: "FFDistrictName", style: 'lightbluecolor', apeendVal: '(FF District + MF District). Adilabad, Anantapur, Ariyalur, CHENGALPATTUMGR, Chennai, Chittoor, Coimbatore, Cuddalore, Dharmapuri, ЕЕ. etc' },
    { checkvalue: false, Text: "FF Native Place", value: "FFNativePlace", style: 'lightbluecolor', apeendVal: '(FF Native + MF Native). Memo Box for Native Places. Enter Not, disply all entered profiles.' },
    // mother 104 to 117
    { checkvalue: false, Text: "Mother All", value: "MotherAll", style: 'colorred', apeendVal: '' },
    { checkvalue: false, Text: "M Name Edu Prof", value: "MAllFields", style: 'darkblue', apeendVal: 'Enter Father Name, Education and Profession' },
    { checkvalue: false, Text: "M Name", value: "MFirstName", style: 'darkblue', apeendVal: 'Mother First Name or MF Sur Name' },
    { checkvalue: false, Text: "M Education", value: "MEducationDetails", style: 'darkblue', apeendVal: 'Memo Box for Mother Education (BA,  BCom,  BE( Civil ),  BE( Mechanical ),  BCom( General ),  BE( Electronics ),  BCom( Accounts ),  BSc( Chemistry ),  Below Graduation,  BSc( Bzc ), . . . . . . . . etc)' },
    { checkvalue: false, Text: "M Profession", value: "MProfessionDetails", style: 'darkblue', apeendVal: 'Memo Box for Mother Profession (RETD STORES OFFICER B.H.P.V,  MANAGER,   Assistant Director,  RETIRED LIC OFFICER,   Agriculture,   Central Govt Employee,   Engineer - Non IT, . . . . . . etc)' },
    { checkvalue: false, Text: "M Company Name", value: "MCompanyId", style: 'darkblue', apeendVal: 'Yamaha Company, Symphony Software Pvt Ltd, BRONDCOM CROP, ACCENTURE, FLEXTRONICS, SIEMENS LTD, GENPACT, MOBILE DIGICONV BUSINESS, . . . . . . . etc' },
    { checkvalue: false, Text: "M Job Location", value: "MJobLocation", style: 'darkblue', apeendVal: 'Industries,  BODINAYAKANNUR,  DOING BUSINESS AND  AGRICULTURE AT VISAKHAPATNAM,  ELURU,  Gudlavalleru,  Guntakal, . . . . . . . . etc' },
    { checkvalue: false, Text: "M Mobile/Land Line", value: "MNumber", style: 'darkblue', apeendVal: 'Phone Number' },
    { checkvalue: false, Text: "M Email", value: "Memail", style: 'darkblue', apeendVal: 'EMailID' },
    { checkvalue: false, Text: "MF Name", value: "MFatherFirstName", style: 'darkblue', apeendVal: 'Mother Father First Name or MF Sur Name' },
    { checkvalue: false, Text: "MF Sur Name", value: "MFatherLastName", style: 'darkblue', apeendVal: 'Mother Father First Name or MF Sur Name' },
    { checkvalue: false, Text: "MF Mobile/Land", value: "MFatherContactNumber", style: 'darkblue', apeendVal: 'Mother Father Phone Number' },
    { checkvalue: false, Text: "MF State", value: "MFStateName", style: 'darkblue', apeendVal: '(MF State + FF State). Alabama, Alaska, Andaman  and Nicobar, Andhra Pradesh, Ardsley, Arizona, Arkansas, Arunachal Pradesh, Assam, ЕЕ.. etc' },
    { checkvalue: false, Text: "MF District", value: "MFDistrictName", style: 'darkblue', apeendVal: '(MF District + FF District). Adilabad, Anantapur, Ariyalur, CHENGALPATTUMGR, Chennai, Chittoor, Coimbatore, Cuddalore, Dharmapuri, ЕЕ. etc' },
    { checkvalue: false, Text: "MF Native Place", value: "MFNativePlace", style: 'darkblue', apeendVal: '(MF Native + FF Native). Memo Box for Native Places. Enter Not, disply all entered profiles.' },

    //Brother  118-- 132
    { checkvalue: false, Text: "Customer Brother All", value: "Br_AllFields", style: 'colorbrown', apeendVal: 'Candidate brother All information like name, Education, Profession, Spouse info etc' },
    { checkvalue: false, Text: "CB Name", value: "Br_Name", style: 'lightgreen', apeendVal: 'CB Name' },
    { checkvalue: false, Text: "CB Education", value: "Br_Education", style: 'lightgreen', apeendVal: 'Memo Box for Brother Education (BA,  BCom,  BE( Civil ),  BE( Mechanical ),  BCom( General ),  BE( Electronics ),  BCom( Accounts ),  BSc( Chemistry ),  Below Graduation,  BSc( Bzc ), . . . . . . . . etc)' },
    { checkvalue: false, Text: "CB Profession", value: "Br_Profession", style: 'lightgreen', apeendVal: 'Private Company, Government/Public Sector, Defense / Civil Services, Business / Self Employed, Not Working , . . . . . . . . .  etc' },
    { checkvalue: false, Text: "CB Company", value: "Br_CompanyNAME", style: 'lightgreen', apeendVal: 'Memo Box for Brother Company (Yamaha Company, Symphony Software Pvt Ltd, BRONDCOM CROP, ACCENTURE, FLEXTRONICS, SIEMENS LTD, GENPACT, MOBILE DIGICONV BUSINESS, . . . . . . . etc)' },
    { checkvalue: false, Text: "CB Job Location", value: "Br_Joblocation", style: 'lightgreen', apeendVal: 'ASHOKNAGAR, KANURU, VIJAYAWADA, NEAR PAPPULA MILL,  BANGALORE,  Bellary,  BENGALURU, Public Industries,  BODINAYAKANNUR,  DOING BUSINESS AND  AGRICULTURE AT VISAKHAPATNAM,  ELURU,  Gudlavalleru,  Guntakal, . . . . . . . . etc' },
    { checkvalue: false, Text: "CB Mobile/land", value: "BrContactNo", style: 'lightgreen', apeendVal: 'Phone Number' },
    { checkvalue: false, Text: "CB email", value: "Br_Email", style: 'lightgreen', apeendVal: 'EmailID' },
    { checkvalue: false, Text: "CB Married Status", value: "CB_MarriedStatus", style: 'lightgreen', apeendVal: 'Yes, No' },
    { checkvalue: false, Text: "CB (Younger/Elder) Status", value: "CB_YEStatus", style: 'lightgreen', apeendVal: 'Y or E' },
    { checkvalue: false, Text: "CBW Name", value: "Brw_Name", style: 'lightgreen', apeendVal: 'Candidate Brother Wife Name' },
    { checkvalue: false, Text: "CBW Education", value: "Brw_Education", style: 'lightgreen', apeendVal: 'Memo Box for Brother wife Education (BA,  BCom,  BE( Civil ),  BE( Mechanical ),  BCom( General ),  BE( Electronics ),  BCom( Accounts ),  BSc( Chemistry ),  Below Graduation,  BSc( Bzc ), . . . . . . . . etc)' },
    { checkvalue: false, Text: "CBW Profession", value: "Brw_Profession", style: 'lightgreen', apeendVal: 'Private Company, Government/Public Sector, Defense / Civil Services, Business / Self Employed, Not Working , . . . . . . . . .  etc' },
    { checkvalue: false, Text: "CBW Company Name", value: "Brw_CompanyNAME", style: 'lightgreen', apeendVal: 'Memo Box for Brother Company (Yamaha Company, Symphony Software Pvt Ltd, BRONDCOM CROP, ACCENTURE, FLEXTRONICS, SIEMENS LTD, GENPACT, MOBILE DIGICONV BUSINESS, . . . . . . . etc)' },
    { checkvalue: false, Text: "CBW Job Location", value: "Brw_Joblocation", style: 'lightgreen', apeendVal: 'BODINAYAKANNUR,  DOING BUSINESS AND  AGRICULTURE AT VISAKHAPATNAM,  ELURU,  Gudlavalleru,  Guntakal, . . . . . . . . etc' },
    { checkvalue: false, Text: "CBW Mobile/land", value: "BrwContactNo", style: 'lightgreen', apeendVal: 'Phone Number' },
    { checkvalue: false, Text: "CBW Email", value: "Brw_Email", style: 'lightgreen', apeendVal: 'EmailID' },
    { checkvalue: false, Text: "CBWF Sur Name", value: "Brwf_Surname", style: 'lightgreen', apeendVal: 'Candidate Brother Wife Father Sur Name or First Name' },
    { checkvalue: false, Text: "CBWF Name", value: "Brwf_Name", style: 'lightgreen', apeendVal: 'Candidate Brother Wife Father Sur Name or First Name' },
    { checkvalue: false, Text: "CBWF State", value: "BrwfStateName", style: 'lightgreen', apeendVal: 'Alabama, Alaska, Andaman  and Nicobar, Andhra Pradesh, Ardsley, Arizona, Arkansas, Arunachal Pradesh, Assam, ЕЕ.. etc' },
    { checkvalue: false, Text: "CBWF District", value: "BrwfDistrictName", style: 'lightgreen', apeendVal: 'Adilabad, Anantapur, Ariyalur, CHENGALPATTUMGR, Chennai, Chittoor, Coimbatore, Cuddalore, Dharmapuri, ЕЕ. etc' },
    { checkvalue: false, Text: "CBWF Native Place", value: "BrwfCity", style: 'lightgreen', apeendVal: 'Memo Box for Native Places. Enter Not, disply all entered profiles.' },

    // sister 133 ------------> 154
    { checkvalue: false, Text: "Customer Sister All", value: "Sr_AllFields", style: 'colorrose', apeendVal: 'Candidate sister All information like name, Education, Profession, Spouse info etc' },
    { checkvalue: false, Text: "CS Name", value: "Sr_Name", style: 'lightbrown', apeendVal: 'CB Name' },
    { checkvalue: false, Text: "CS Education", value: "Sr_Education", style: 'lightbrown', apeendVal: 'Memo Box for sister Education (BA,  BCom,  BE( Civil ),  BE( Mechanical ),  BCom( General ),  BE( Electronics ),  BCom( Accounts ),  BSc( Chemistry ),  Below Graduation,  BSc( Bzc ), . . . . . . . . etc)' },
    { checkvalue: false, Text: "CS Profession", value: "Sr_Profession", style: 'lightbrown', apeendVal: 'Memo Box for sister Education (BA,  BCom,  BE( Civil ),  BE( Mechanical ),  BCom( General ),  BE( Electronics ),  BCom( Accounts ),  BSc( Chemistry ),  Below Graduation,  BSc( Bzc ), . . . . . . . . etc)' },
    { checkvalue: false, Text: "CS Company", value: "Sr_CompanyNAME", style: 'lightbrown', apeendVal: 'Memo Box for sister Company (Yamaha Company, Symphony Software Pvt Ltd, BRONDCOM CROP, ACCENTURE, FLEXTRONICS, SIEMENS LTD, GENPACT, MOBILE DIGICONV BUSINESS, . . . . . . . etc)' },
    { checkvalue: false, Text: "CS Job Jocation", value: "Sr_Joblocation", style: 'lightbrown', apeendVal: 'ASHOKNAGAR, KANURU, VIJAYAWADA, NEAR PAPPULA MILL,  BANGALORE,  Bellary,  BENGALURU, Public Industries,  BODINAYAKANNUR,  DOING BUSINESS AND  AGRICULTURE AT VISAKHAPATNAM,  ELURU,  Gudlavalleru,  Guntakal, . . . . . . . . etc' },
    { checkvalue: false, Text: "CS Mobile/Land", value: "SrContactNo", style: 'lightbrown', apeendVal: 'Phone Number' },
    { checkvalue: false, Text: "CS Email", value: "Sr_Email", style: 'lightbrown', apeendVal: 'EmailID' },
    { checkvalue: false, Text: "CS Married Status", value: "CS_MarriedStatus", style: 'lightbrown', apeendVal: 'Yes or No' },
    { checkvalue: false, Text: "CS (Younger/Elder) Status", value: "CS_YEStatus", style: 'lightbrown', apeendVal: 'Y or N' },
    { checkvalue: false, Text: "CSH Name", value: "Srh_Name", style: 'lightbrown', apeendVal: 'Candidate Sister Husband Name' },
    { checkvalue: false, Text: "CSH Education", value: "Srh_Education", style: 'lightbrown', apeendVal: 'Memo Box for Sister Husband Education (BA,  BCom,  BE( Civil ),  BE( Mechanical ),  BCom( General ),  BE( Electronics ),  BCom( Accounts ),  BSc( Chemistry ),  Below Graduation,  BSc( Bzc ), . . . . . . . . etc)' },
    { checkvalue: false, Text: "CSH Profession", value: "Srh_Profession", style: 'lightbrown', apeendVal: 'Private Company, Government/Public Sector, Defense / Civil Services, Business / Self Employed, Not Working , . . . . . . . . .  etc' },
    { checkvalue: false, Text: "CSH Company Name", value: "Srh_CompanyNAME", style: 'lightbrown', apeendVal: 'Memo Box for sister Husband Company (Yamaha Company, Symphony Software Pvt Ltd, BRONDCOM CROP, ACCENTURE, FLEXTRONICS, SIEMENS LTD, GENPACT, MOBILE DIGICONV BUSINESS, . . . . . . . etc)' },
    { checkvalue: false, Text: "CSH Job Location", value: "Srh_Joblocation", style: 'lightbrown', apeendVal: 'ASHOKNAGAR, KANURU, VIJAYAWADA, NEAR PAPPULA MILL,  BANGALORE,  Bellary,  BENGALURU, Public Industries,  BODINAYAKANNUR,  DOING BUSINESS AND  AGRICULTURE AT VISAKHAPATNAM,  ELURU,  Gudlavalleru,  Guntakal, . . . . . . . . etc' },
    { checkvalue: false, Text: "CSH Mobile/land", value: "SrhContactNo", style: 'lightbrown', apeendVal: 'Phone Number' },
    { checkvalue: false, Text: "CSH Email", value: "Srh_Email", style: 'lightbrown', apeendVal: 'EmaiId' },
    { checkvalue: false, Text: "CSHF Sur Name", value: "Srhf_Surname", style: 'lightbrown', apeendVal: 'Candidate Sister Husband Father Sur Name or First Name' },
    { checkvalue: false, Text: "CSHF Name", value: "Srhf_Name", style: 'lightbrown', apeendVal: 'Candidate Sister Husband Father Name or Sur Name' },
    { checkvalue: false, Text: "CSHF State", value: "SrhfStateName", style: 'lightbrown', apeendVal: 'Alabama, Alaska, Andaman  and Nicobar, Andhra Pradesh, Ardsley, Arizona, Arkansas, Arunachal Pradesh, Assam, ЕЕ.. etc' },
    { checkvalue: false, Text: "CSHF District", value: "SrhfDistrictName", style: 'lightbrown', apeendVal: 'Adilabad, Anantapur, Ariyalur, CHENGALPATTUMGR, Chennai, Chittoor, Coimbatore, Cuddalore, Dharmapuri, ЕЕ. etc' },
    { checkvalue: false, Text: "CSHF Native Place", value: "SrhfCity", style: 'lightbrown', apeendVal: 'Memo Box for Native Places. Enter Not, disply all entered profiles.' },

    // father brother  155------ 162

    { checkvalue: false, Text: "Father Brother All", value: "FB_AllFields", style: 'allfieldsred', apeendVal: 'Candidate Father brother All information like name, Education, Profession info etc' },
    { checkvalue: false, Text: "FB Name", value: "FB_Name", style: 'tealcolor', apeendVal: 'FB Name' },
    { checkvalue: false, Text: "FB (Younger/Elder) Status", value: "FB_ElderYounger", style: 'tealcolor', apeendVal: 'Y or N' },
    { checkvalue: false, Text: "FB Education", value: "FB_Education", style: 'tealcolor', apeendVal: 'Memo Box for Brother Education (BA,  BCom,  BE( Civil ),  BE( Mechanical ),  BCom( General ),  BE( Electronics ),  BCom( Accounts ),  BSc( Chemistry ),  Below Graduation,  BSc( Bzc ), . . . . . . . . etc)' },
    { checkvalue: false, Text: "FB Profession", value: "FB_Profession", style: 'tealcolor', apeendVal: 'Memo Box like Agriculture,  Banking Department  ANDHRA BANK.,  Business,  Doctor,  Farming,  Govt Employee,  Industrialist,  Lawyer, . . . . . . . etc' },
    { checkvalue: false, Text: "FB Mobile/land", value: "FB_Contactnumber", style: 'tealcolor', apeendVal: 'Phone Number' },
    { checkvalue: false, Text: "FB Email", value: "FB_Email", style: 'tealcolor', apeendVal: 'EmailID' },
    { checkvalue: false, Text: "FB Current Location", value: "FB_professionlocation", style: 'tealcolorborder', apeendVal: 'Memo Box for Native Places. Enter Not, disply all entered profiles.' },


    // father sister 163 ----------- 175

    { checkvalue: false, Text: "Father Sister All", value: "FS_AllFields", style: 'allfieldsred', apeendVal: 'Candidate Father Sister All information like name, Education, Profession info etc' },
    { checkvalue: false, Text: "FS Name", value: "FS_Name", style: 'purplecolor', apeendVal: 'FS Name' },
    { checkvalue: false, Text: "FS (Younger/Elder) Status", value: "CFS_YEStatus", style: 'purplecolor', apeendVal: 'Y or N' },
    { checkvalue: false, Text: "FSH Name", value: "FSH_Name", style: 'purplecolor', apeendVal: 'Father Sister Husband Name or Sur Name' },
    { checkvalue: false, Text: "FSH Sur Name", value: "FSH_Surname", style: 'purplecolor', apeendVal: 'Father Sister Husband Name or Sur Name' },
    { checkvalue: false, Text: "FSH Education", value: "FSH_Education", style: 'purplecolor', apeendVal: 'Memo box like AGRICULTURE, Airline & Aviation, ANEATHECIA, asd errr, Assitant Manager, B COM, B COM,MPT., B FORMCY, B TECH, B. A, B. COM, B.A, B.A B.ED, . . . . . . . . etc' },
    { checkvalue: false, Text: "FSH Profession", value: "FSH_Profession", style: 'purplecolor', apeendVal: 'Memo Box like Agriculture,  Banking Department  ANDHRA BANK.,  Business,  Doctor,  Farming,  Govt Employee,  Industrialist,  Lawyer, . . . . . . . etc' },
    { checkvalue: false, Text: "FSH Mobile/Land", value: "FSHContactNo", style: 'purplecolor', apeendVal: 'Phone Number' },
    { checkvalue: false, Text: "FSH Email", value: "FSH_Email", style: 'purplecolor', apeendVal: 'EmailID' },
    { checkvalue: false, Text: "FSH Current Location", value: "FSH_ProfessionLocation", style: 'purplecolor', apeendVal: 'AGANAMPUDI, AGARAM, AGRAHARAM, AGRICULTURE, AKUNURU KRISHNA DT, ALABAMA USA, ALAGULUM, . . . . . . . etc' },
    { checkvalue: false, Text: "FSH state", value: "FSHStateName", style: 'purplecolor', apeendVal: 'Alabama, Alaska, Andaman  and Nicobar, Andhra Pradesh, Ardsley, Arizona, Arkansas, Arunachal Pradesh, Assam, ЕЕ.. etc' },
    { checkvalue: false, Text: "FSH District", value: "FSHDistrictName", style: 'purplecolor', apeendVal: 'Adilabad, Anantapur, Ariyalur, CHENGALPATTUMGR, Chennai, Chittoor, Coimbatore, Cuddalore, Dharmapuri, ЕЕ. etc' },
    { checkvalue: false, Text: "FSH Native Place", value: "FSHCityName", style: 'purplecolor', apeendVal: 'Memo Box for Native Places. Enter Not, disply all entered profiles.' },

    // Mother Brother 176 --- 183

    { checkvalue: false, Text: "Mother Brother All", value: "MB_AllFields", style: 'colortomoto', apeendVal: 'Candidate Father brother All information like name, Education, Profession info etc' },
    { checkvalue: false, Text: "MB Name", value: "MB_Name", style: 'slatebue', apeendVal: 'MB Name' },
    { checkvalue: false, Text: "MB (Younger/Elder) Status", value: "CMB_YEStatus", style: 'slatebue', apeendVal: 'Y or N' },
    { checkvalue: false, Text: "MB Education", value: "MB_Education", style: 'slatebue', apeendVal: 'Memo Box for Brother Education (BA,  BCom,  BE( Civil ),  BE( Mechanical ),  BCom( General ),  BE( Electronics ),  BCom( Accounts ),  BSc( Chemistry ),  Below Graduation,  BSc( Bzc ), . . . . . . . . etc)' },
    { checkvalue: false, Text: "MB Profession", value: "MB_Profession", style: 'slatebue', apeendVal: 'Memo Box like Agriculture,  Banking Department  ANDHRA BANK.,  Business,  Doctor,  Farming,  Govt Employee,  Industrialist,  Lawyer, . . . . . . . etc' },
    { checkvalue: false, Text: "MB Mobile/land", value: "MB_ContactNo", style: 'slatebue', apeendVal: 'Phone Number' },
    { checkvalue: false, Text: "MB Email", value: "MB_Email", style: 'slatebue', apeendVal: 'EmailID' },
    { checkvalue: false, Text: "MB Current Location", value: "MB_professionlocation", style: 'slatebue', apeendVal: 'Memo Box for Native Places. Enter Not, disply all entered profiles.' },

    // /Mothrer sister 184 ----- 196

    { checkvalue: false, Text: "Mother Sister All", value: "MS_AllFields", style: 'colortomoto', apeendVal: 'Candidate Mother All information like name, Education, Profession info etc' },
    { checkvalue: false, Text: "MS Name", value: "MS_Name", style: 'slatebue', apeendVal: 'MS Name' },
    { checkvalue: false, Text: "MS (Younger/Elder) Status", value: "CMS_YEStatus", style: 'slatebue', apeendVal: 'Y or N' },
    { checkvalue: false, Text: "MSH Name", value: "MSH_Name", style: 'slatebue', apeendVal: 'Mother Sister Husband Name or Sur Name' },
    { checkvalue: false, Text: "MSH SurName", value: "MSH_Surname", style: 'slatebue', apeendVal: 'Mother Sister Husband Name or Sur Name' },
    { checkvalue: false, Text: "MSH Education", value: "MSH_Education", style: 'slatebue', apeendVal: 'Memo box like AGRICULTURE, Airline & Aviation, ANEATHECIA, asd errr, Assitant Manager, B COM, B COM,MPT., B FORMCY, B TECH, B. A, B. COM, B.A, B.A B.ED, . . . . . . . . etc' },
    { checkvalue: false, Text: "MSH Profession", value: "MSH_Profession", style: 'slatebue', apeendVal: 'Memo Box like Agriculture,  Banking Department  ANDHRA BANK.,  Business,  Doctor,  Farming,  Govt Employee,  Industrialist,  Lawyer, . . . . . . . etc' },
    { checkvalue: false, Text: "MSH Mobile/Land", value: "MSH_ContactNo", style: 'slatebue', apeendVal: 'Phone Number' },
    { checkvalue: false, Text: "MSH Email", value: "MSH_Email", style: 'slatebue', apeendVal: 'EmailID' },
    { checkvalue: false, Text: "MSH Current Location", value: "MSH_ProfessionLocation", style: 'slatebue', apeendVal: 'AGANAMPUDI, AGARAM, AGRAHARAM, AGRICULTURE, AKUNURU KRISHNA DT, ALABAMA USA, ALAGULUM, . . . . . . . etc' },
    { checkvalue: false, Text: "MSH state", value: "MSHStateName", style: 'slatebue', apeendVal: 'Alabama, Alaska, Andaman  and Nicobar, Andhra Pradesh, Ardsley, Arizona, Arkansas, Arunachal Pradesh, Assam, ЕЕ.. etc' },
    { checkvalue: false, Text: "MSH District", value: "MSHDistrictName", style: 'slatebue', apeendVal: 'Adilabad, Anantapur, Ariyalur, CHENGALPATTUMGR, Chennai, Chittoor, Coimbatore, Cuddalore, Dharmapuri, ЕЕ. etc' },
    { checkvalue: false, Text: "MSH Native Place", value: "MSHCityName", style: 'slatebue', apeendVal: 'Memo Box for Native Places. Enter Not, disply all entered profiles.' },



    { checkvalue: false, Text: "Spouse All", value: "SpouseAll", style: 'colorindigo', apeendVal: 'Spouse All information like name, Education, Profession info etc' },

    { checkvalue: false, Text: "Spouse Name", value: "SFName", style: 'teallcolor', apeendVal: 'Spouse Name' },
    { checkvalue: false, Text: "Spouse Education", value: "SpouseEducation", style: 'teallcolor', apeendVal: 'Memo box like BE,MS,MBA, BTECH,MS, BCOM, B-PHARMACY, B.E.,, CA COMPLETE, MS,USA, BAMS, (MS), Btech, BA,MBA, GUDIPUDI, BE(BIO TECH) MS, B.Tech (IT), Pharmacy, . . . . . . . etc' },
    { checkvalue: false, Text: "Spouse Profession", value: " SpouseProfession", style: 'teallcolor', apeendVal: 'Memo box like SOFTWARE ENGINEER,USA, swe,india, BTech, PRODUCTION MANAGER,SAP, BENGALURU, Dy.Tahasildar, Nuzvid, REDDY LABS, DOCTOR IN USA, UNEMP, . . . . . etc' },
    { checkvalue: false, Text: "Spouse Married On", value: "SpouseMarriedOn", style: 'teallcolor', apeendVal: 'MM/DD/YYYY' },
    { checkvalue: false, Text: "Spouse Separated Date", value: "SpouseSeparatedDate", style: 'teallcolor', apeendVal: 'MM/DD/YYYY' },
    { checkvalue: false, Text: "Spouse Legally Divorced", value: "SpouseLegallyDivorced", style: 'teallcolor', apeendVal: 'Yes or No' },
    { checkvalue: false, Text: "Spouse Father Name", value: "SouseFatherName", style: 'teallcolor', apeendVal: 'Spouse Father Name or Sur Name' },
    { checkvalue: false, Text: "Spouse Father Sur Name", value: "SpouseFatherSurname", style: 'teallcolor', apeendVal: 'Spouse Father Name or Sur Name' },
    { checkvalue: false, Text: "Spouse about previous marriage", value: "Spouseaboutpreviousmarriage", style: 'teallcolor', apeendVal: 'Memo Box for Previous Marriage. Enter Not, disply all entered profiles.' },
    { checkvalue: false, Text: "Spouse family Planing", value: "SpousefamilyPlaning", style: 'teallcolor', apeendVal: 'Yes or No' },
    { checkvalue: false, Text: "Spouse No of Childs Boys", value: "Sp_NoofChilds_Boys", style: 'teallcolor', apeendVal: 'Number like (1, 2, 3 ЕЕ.etc)' },
    { checkvalue: false, Text: "Spouse No of Childs Girls", value: "Sp_NoofChilds_Girls", style: 'teallcolor', apeendVal: 'Number like (1, 2, 3 ЕЕ.etc)' },
    { checkvalue: false, Text: "Spouse Legally Diverced On", value: "sp_LegallyDivercedOn", style: 'teallcolor', apeendVal: 'MM/DD/YYYY' },
    { checkvalue: false, Text: "Spouse F Native", value: "Sp_Father_Native", style: 'teallcolor', apeendVal: 'Name Of the Candidate' },

    // All fields --- 212 --- 218    

    { checkvalue: false, Text: "All Phones", value: "Phones_All", style: 'allfieldsred', apeendVal: 'Mobile Numbers' },
    { checkvalue: false, Text: "All Emails", value: "Emails_All", style: 'allfieldsred', apeendVal: 'Emails' },
    { checkvalue: false, Text: "All Natives", value: "Natives_All", style: 'allfieldsred', apeendVal: 'Memo Box for Native Places. Enter Not, disply all entered profiles' },
    { checkvalue: false, Text: "All Names + Surnames", value: "Name_All", style: 'allfieldsred', apeendVal: 'Candidate name, Father Name, Mother Name, . . . . . . etc' },

    // { checkvalue: false, Text: "All Partner Prefered Caste", value: "Caste_All", style: 'lightbluecolor', apeendVal: 'Kamma, Balija, Reddy, Kapu,  . . . . . .  etc' },
    { checkvalue: false, Text: "All Qualification + Education", value: "Qualification_All", style: 'allfieldsred', apeendVal: 'Bachelors in Engineering, Bachelors in Degree, Diploma, Doctorate/phd, Masters in Engineering, Bachelors in Medicine, Masters in Degree, Finance - ICWAI/CA/CS, ЕЕЕЕ.. etc or -BE, BTech, AMIE, Aeronautical Engineering, B Arch, B Phil, BCom, BSc, BA, BHM, BEd, Trade School, Diploma, Polytechnic, Phd, ЕЕЕЕ etc or EduSpecializationName, Electronics, Aeronautical And Aerospace, Agricultural, Computer Science, Chemical, Civil, Electricals and Electronics, Automobile, ЕЕЕЕЕЕ. etc' },
    { checkvalue: false, Text: "All Profession", value: "Profession_All", style: 'allfieldsred', apeendVal: 'Accounting / Banking / Finance, Administration & HR, Media & Entertainment, Agriculture, Airline & Aviation, Architecture & Design , . . . . . . . etc' },
    { checkvalue: false, Text: "FF + MF All", value: "FFAll", style: 'allfieldsred', apeendVal: '' },

    // ref  ..... 219 -- 232

    { checkvalue: false, Text: "Reference All", value: "RefAll", style: 'allfieldsred', apeendVal: 'Ref All information like name, Education, Profession info etc' },

    { checkvalue: false, Text: "Ref Name", value: "RefName", style: 'olivedrabcolor', apeendVal: 'Reference First Name or Sur Name' },
    { checkvalue: false, Text: "Ref Sur Name", value: "RefSurname", style: 'olivedrabcolor', apeendVal: 'Reference Sur Name or Name' },
    { checkvalue: false, Text: "Ref profession", value: "Refprofession", style: 'olivedrabcolor', apeendVal: 'Memo Box for Mother Profession (RETD STORES OFFICER B.H.P.V,  MANAGER,   Assistant Director,  RETIRED LIC OFFICER,   Agriculture,   Central Govt Employee,   Engineer - Non IT, . . . . . . etc)' },
    { checkvalue: false, Text: "Ref country", value: "Refcountry", style: 'olivedrabcolor', apeendVal: 'India, USA, UK, Canada, Australia, Singapore, ЕЕ..etc' },
    { checkvalue: false, Text: "Ref State", value: "RefState", style: 'olivedrabcolor', apeendVal: 'Alabama, Alaska, Andaman  and Nicobar, Andhra Pradesh, Ardsley, Arizona, Arkansas, Arunachal Pradesh, Assam, ЕЕ.. etc' },
    { checkvalue: false, Text: "Ref District", value: "RefDistrict", style: 'olivedrabcolor', apeendVal: 'Adilabad, Anantapur, Ariyalur, CHENGALPATTUMGR, Chennai, Chittoor, Coimbatore, Cuddalore, Dharmapuri, ЕЕ. etc' },
    { checkvalue: false, Text: "Ref Native Place", value: "RefNativePlace", style: 'olivedrabcolor', apeendVal: 'Memo Box for Native Places. Enter Not, disply all entered profiles.' },
    { checkvalue: false, Text: "Ref Present Location", value: "RefPresentLocation", style: 'olivedrabcolor', apeendVal: 'Memo Box for current Location. Enter Not, disply all entered profiles.' },
    { checkvalue: false, Text: "Ref Mobile", value: "RefMobile", style: 'olivedrabcolor', apeendVal: 'Phone Number' },
    { checkvalue: false, Text: "Ref land Line", value: "ReflandLine", style: 'olivedrabcolor', apeendVal: 'Phone Number' },
    { checkvalue: false, Text: "Ref Email", value: "RefEmail", style: 'olivedrabcolor', apeendVal: 'EmailID' },
    { checkvalue: false, Text: "Ref Relation ShipType", value: "Ref_RelationShipType", style: 'olivedrabcolor', apeendVal: 'Friend, Relative, Not Given' },
    { checkvalue: false, Text: "Ref Narration", value: "RefNarration", style: 'olivedrabcolor', apeendVal: 'Memo Box for Marriage information Narration.' },

    // partner 233 --- 260

    { checkvalue: false, Text: "Partner Education All", value: "Pr_EduAll", style: 'colorchoclate', apeendVal: 'Not in Use' },
    { checkvalue: false, Text: "Partner Profession All", value: "Pr_ProfAll", style: 'colorchoclate', apeendVal: 'Not in Use' },
    { checkvalue: false, Text: "Partner Age_fr", value: "Pr_Age_fr", style: 'salmoncolor', apeendVal: 'Number like (24, 25, 26, 27, Е.etc)' },
    { checkvalue: false, Text: "Partner Age_to", value: "Pr_Age_to", style: 'salmoncolor', apeendVal: 'Number like (24, 25, 26, 27, Е.etc)' },
    { checkvalue: false, Text: "Partner Hight_fr", value: "Pr_Hight_fr", style: 'salmoncolor', apeendVal: 'Decimal like (5.2, 5.3, 5.5, . . . . etc)' },
    { checkvalue: false, Text: "Partner Hight_to", value: "Pr_Hight_to", style: 'salmoncolor', apeendVal: 'Decimal like (5.2, 5.3, 5.5, . . . . etc)' },
    { checkvalue: false, Text: "Partner Religion", value: "Pr_Religion", style: 'salmoncolor', apeendVal: 'Hindu, Christian, Muslim, Other, ЕЕ.. etc' },
    { checkvalue: false, Text: "Partner Region", value: "Pr_Region", style: 'salmoncolor', apeendVal: 'Andhra Pradesh, Tamil Nadu, karnataka' },
    { checkvalue: false, Text: "Partner Mother Tongue", value: "Pr_MotherTongue", style: 'salmoncolor', apeendVal: 'Telugu, Tamil, Kannada, Hindi, Punjabi, Urdu, . . . . . . etc' },
    { checkvalue: false, Text: "Partner Caste", value: "Pr_Caste", style: 'salmoncolor', apeendVal: 'Kamma, Balija, Reddy, Kapu,  . . . . . .  etc' },
    { checkvalue: false, Text: "Partner Sub Caste", value: "Pr_SubCaste", style: 'salmoncolor', apeendVal: 'Kamma, Converted Christian, GAVARA, GAJULU, Converted Christian, surya balija, Converted Christian, VANNE, Christian, ЕЕ. etc' },
    { checkvalue: false, Text: "Partner Marital Status", value: "Pr_MaritalStatus", style: 'salmoncolor', apeendVal: 'Unmarried, Divorce, Widow/Widower, Separated, NULL AND VOID' },
    { checkvalue: false, Text: "Partner Education", value: "Pr_Education", style: 'salmoncolor', apeendVal: 'Bachelors in Engineering, Bachelors in Degree, Diploma, Doctorate/phd, Masters in Engineering, Bachelors in Medicine, Masters in Degree, Finance - ICWAI/CA/CS, ЕЕЕЕ.. etc' },
    { checkvalue: false, Text: "Partner Profession", value: "Pr_Profession", style: 'salmoncolor', apeendVal: 'Private Company, Government/Public Sector, Defense / Civil Services, Business / Self Employed, Not Working , . . . . . . . . .  etc' },
    { checkvalue: false, Text: "Partner Profession Details", value: "Pr_ProfessionDetails", style: 'salmoncolor', apeendVal: 'Accounting / Banking / Finance, Administration & HR, Media & Entertainment, Agriculture, Airline & Aviation, Architecture & Design , . . . . . . . etc' },

    { checkvalue: false, Text: "Partner Property From", value: "Pr_PropertyFrom", style: 'salmoncolor', apeendVal: 'Not in Use' },
    { checkvalue: false, Text: "Partner Property To", value: "Pr_PropertyTo", style: 'salmoncolor', apeendVal: 'Not in Use' },

    { checkvalue: false, Text: "Partner Mangalic", value: "Pr_Mangalic", style: 'salmoncolor', apeendVal: 'Yes or No' },
    { checkvalue: false, Text: "Partner Star Language", value: "Pr_StarLanguage", style: 'salmoncolor', apeendVal: 'Telugu, Tamil, Kannada' },
    { checkvalue: false, Text: "Partner Preferred Star", value: "Pr_PreferredStar", style: 'salmoncolor', apeendVal: 'Bharani, Krithika, Rohini, Mrigasira, Arudra, Punarvasu, . . . . . etc' },
    { checkvalue: false, Text: "Partner Non Preferred Star", value: "Pr_NonPreferredStar", style: 'salmoncolor', apeendVal: 'Bharani, Krithika, Rohini, Mrigasira, Arudra, Punarvasu, . . . . . etc' },
    { checkvalue: false, Text: "Partner Diet", value: "Pr_Diet", style: 'salmoncolor', apeendVal: 'Veg, Non Veg, Both' },
    { checkvalue: false, Text: "Partner Preferred Country", value: "Pr_PreferredCountry", style: 'salmoncolor', apeendVal: 'India, USA, UK, Canada, Australia, Singapore, ЕЕ..etc' },
    { checkvalue: false, Text: "Partner Preferred State", value: "Pr_PreferredState", style: 'salmoncolor', apeendVal: 'Alabama, Alaska, Andaman  and Nicobar, Andhra Pradesh, Ardsley, Arizona, Arkansas, Arunachal Pradesh, Assam, ЕЕ.. etc' },
    { checkvalue: false, Text: "Partner Branch", value: "Pr_Branch", style: 'salmoncolor', apeendVal: 'Not In Use' },
    { checkvalue: false, Text: "Partner Willing to Second Mrg", value: "Pr_WillingtoSecondMrg", style: 'salmoncolor', apeendVal: 'Yes or No' },
    { checkvalue: false, Text: "Partner Native Location", value: "Pr_NativeLocation", style: 'salmoncolor', apeendVal: 'Not in Use' },
    { checkvalue: false, Text: "Partner Merit", value: "Pr_Merit", style: 'salmoncolor', apeendVal: 'Not in Use' },

  ];
  ngOnInit() {
  }

}

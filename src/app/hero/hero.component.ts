import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterByLetterPipe } from '../Pipes/letter-by-letter.pipe';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-hero',
  imports: [CommonModule,LetterByLetterPipe,ReactiveFormsModule,HttpClientModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
    currentSlide: number = 0;
  currentThumbPage: number = 0;
  isMobile: boolean = false;
  contactForm: FormGroup;
  isLoading = false;
  submitSuccess = false;
  submitError = '';
  slides = [0, 1, 2];
  slideInterval: any;
  currentSlide2: number = 0;
   constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      property: ['', Validators.required], // New form control for property selection
    });
  }
    mockProperties: any[] = [
    {
      id: 1,
      name: '1 Bedroom Apartment',
    },
    {
      id: 2,
      name: '2 Bedroom Apartment',

    },
    {
      id: 3,
      name: '3 Bedroom Apartment',
    }
  ];
    private intervalId: any;
backgroundImages = [
    '/FAQ/pexels-chaitaastic-1797195-scaled.jpg',
        '/FAQ/pexels-jeshoots-com-147458-442579-scaled.jpg'

  ];

  currentImageIndex = 0;
  isAnimating = true;
  wasActive: boolean[] = [];

  animationDuration = 6000;

  ngOnInit() {

    this.wasActive = new Array(this.backgroundImages.length).fill(false);
    this.wasActive[0] = true;


    this.startBackgroundCycle();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startBackgroundCycle() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, this.animationDuration);
  }

  nextImage() {

    this.wasActive[this.currentImageIndex] = true;


    this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;


    setTimeout(() => {
      this.wasActive = new Array(this.backgroundImages.length).fill(false);
      this.wasActive[this.currentImageIndex] = true;
    }, 1000);
  }

  setCurrentImage(index: number) {
    if (index !== this.currentImageIndex) {
      this.wasActive[this.currentImageIndex] = true;
      this.currentImageIndex = index;


      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.startBackgroundCycle();
      }

      setTimeout(() => {
        this.wasActive = new Array(this.backgroundImages.length).fill(false);
        this.wasActive[this.currentImageIndex] = true;
      }, 1000);
    }
  }
  // countries = [
  //   { name: "Egypt", code: "EG", dial_code: "+20", flag: "https://flagcdn.com/w40/eg.png" },
  //   { name: "Afghanistan", code: "AF", dial_code: "+93", flag: "https://flagcdn.com/w40/af.png" },
  //   { name: "Albania", code: "AL", dial_code: "+355", flag: "https://flagcdn.com/w40/al.png" },
  //   { name: "Algeria", code: "DZ", dial_code: "+213", flag: "https://flagcdn.com/w40/dz.png" },
  //   { name: "Andorra", code: "AD", dial_code: "+376", flag: "https://flagcdn.com/w40/ad.png" },
  //   { name: "Angola", code: "AO", dial_code: "+244", flag: "https://flagcdn.com/w40/ao.png" },
  //   { name: "Antigua and Barbuda", code: "AG", dial_code: "+1", flag: "https://flagcdn.com/w40/ag.png" },
  //   { name: "Argentina", code: "AR", dial_code: "+54", flag: "https://flagcdn.com/w40/ar.png" },
  //   { name: "Armenia", code: "AM", dial_code: "+374", flag: "https://flagcdn.com/w40/am.png" },
  //   { name: "Australia", code: "AU", dial_code: "+61", flag: "https://flagcdn.com/w40/au.png" },
  //   { name: "Austria", code: "AT", dial_code: "+43", flag: "https://flagcdn.com/w40/at.png" },
  //   { name: "Azerbaijan", code: "AZ", dial_code: "+994", flag: "https://flagcdn.com/w40/az.png" },
  //   { name: "Bahamas", code: "BS", dial_code: "+1", flag: "https://flagcdn.com/w40/bs.png" },
  //   { name: "Bahrain", code: "BH", dial_code: "+973", flag: "https://flagcdn.com/w40/bh.png" },
  //   { name: "Bangladesh", code: "BD", dial_code: "+880", flag: "https://flagcdn.com/w40/bd.png" },
  //   { name: "Barbados", code: "BB", dial_code: "+1", flag: "https://flagcdn.com/w40/bb.png" },
  //   { name: "Belarus", code: "BY", dial_code: "+375", flag: "https://flagcdn.com/w40/by.png" },
  //   { name: "Belgium", code: "BE", dial_code: "+32", flag: "https://flagcdn.com/w40/be.png" },
  //   { name: "Belize", code: "BZ", dial_code: "+501", flag: "https://flagcdn.com/w40/bz.png" },
  //   { name: "Benin", code: "BJ", dial_code: "+229", flag: "https://flagcdn.com/w40/bj.png" },
  //   { name: "Bhutan", code: "BT", dial_code: "+975", flag: "https://flagcdn.com/w40/bt.png" },
  //   { name: "Bolivia", code: "BO", dial_code: "+591", flag: "https://flagcdn.com/w40/bo.png" },
  //   { name: "Bosnia and Herzegovina", code: "BA", dial_code: "+387", flag: "https://flagcdn.com/w40/ba.png" },
  //   { name: "Botswana", code: "BW", dial_code: "+267", flag: "https://flagcdn.com/w40/bw.png" },
  //   { name: "Brazil", code: "BR", dial_code: "+55", flag: "https://flagcdn.com/w40/br.png" },
  //   { name: "Brunei", code: "BN", dial_code: "+673", flag: "https://flagcdn.com/w40/bn.png" },
  //   { name: "Bulgaria", code: "BG", dial_code: "+359", flag: "https://flagcdn.com/w40/bg.png" },
  //   { name: "Burkina Faso", code: "BF", dial_code: "+226", flag: "https://flagcdn.com/w40/bf.png" },
  //   { name: "Burundi", code: "BI", dial_code: "+257", flag: "https://flagcdn.com/w40/bi.png" },
  //   { name: "Cabo Verde", code: "CV", dial_code: "+238", flag: "https://flagcdn.com/w40/cv.png" },
  //   { name: "Cambodia", code: "KH", dial_code: "+855", flag: "https://flagcdn.com/w40/kh.png" },
  //   { name: "Cameroon", code: "CM", dial_code: "+237", flag: "https://flagcdn.com/w40/cm.png" },
  //   { name: "Canada", code: "CA", dial_code: "+1", flag: "https://flagcdn.com/w40/ca.png" },
  //   { name: "Central African Republic", code: "CF", dial_code: "+236", flag: "https://flagcdn.com/w40/cf.png" },
  //   { name: "Chad", code: "TD", dial_code: "+235", flag: "https://flagcdn.com/w40/td.png" },
  //   { name: "Chile", code: "CL", dial_code: "+56", flag: "https://flagcdn.com/w40/cl.png" },
  //   { name: "China", code: "CN", dial_code: "+86", flag: "https://flagcdn.com/w40/cn.png" },
  //   { name: "Colombia", code: "CO", dial_code: "+57", flag: "https://flagcdn.com/w40/co.png" },
  //   { name: "Comoros", code: "KM", dial_code: "+269", flag: "https://flagcdn.com/w40/km.png" },
  //   { name: "Congo (Congo-Brazzaville)", code: "CG", dial_code: "+242", flag: "https://flagcdn.com/w40/cg.png" },
  //   { name: "Costa Rica", code: "CR", dial_code: "+506", flag: "https://flagcdn.com/w40/cr.png" },
  //   { name: "Croatia", code: "HR", dial_code: "+385", flag: "https://flagcdn.com/w40/hr.png" },
  //   { name: "Cuba", code: "CU", dial_code: "+53", flag: "https://flagcdn.com/w40/cu.png" },
  //   { name: "Cyprus", code: "CY", dial_code: "+357", flag: "https://flagcdn.com/w40/cy.png" },
  //   { name: "Czech Republic", code: "CZ", dial_code: "+420", flag: "https://flagcdn.com/w40/cz.png" },
  //   { name: "Denmark", code: "DK", dial_code: "+45", flag: "https://flagcdn.com/w40/dk.png" },
  //   { name: "Djibouti", code: "DJ", dial_code: "+253", flag: "https://flagcdn.com/w40/dj.png" },
  //   { name: "Dominica", code: "DM", dial_code: "+1", flag: "https://flagcdn.com/w40/dm.png" },
  //   { name: "Dominican Republic", code: "DO", dial_code: "+1", flag: "https://flagcdn.com/w40/do.png" },
  //   { name: "Ecuador", code: "EC", dial_code: "+593", flag: "https://flagcdn.com/w40/ec.png" },
  //   { name: "El Salvador", code: "SV", dial_code: "+503", flag: "https://flagcdn.com/w40/sv.png" },
  //   { name: "Equatorial Guinea", code: "GQ", dial_code: "+240", flag: "https://flagcdn.com/w40/gq.png" },
  //   { name: "Eritrea", code: "ER", dial_code: "+291", flag: "https://flagcdn.com/w40/er.png" },
  //   { name: "Estonia", code: "EE", dial_code: "+372", flag: "https://flagcdn.com/w40/ee.png" },
  //   { name: "Eswatini", code: "SZ", dial_code: "+268", flag: "https://flagcdn.com/w40/sz.png" },
  //   { name: "Ethiopia", code: "ET", dial_code: "+251", flag: "https://flagcdn.com/w40/et.png" },
  //   { name: "Fiji", code: "FJ", dial_code: "+679", flag: "https://flagcdn.com/w40/fj.png" },
  //   { name: "Finland", code: "FI", dial_code: "+358", flag: "https://flagcdn.com/w40/fi.png" },
  //   { name: "France", code: "FR", dial_code: "+33", flag: "https://flagcdn.com/w40/fr.png" },
  //   { name: "Gabon", code: "GA", dial_code: "+241", flag: "https://flagcdn.com/w40/ga.png" },
  //   { name: "Gambia", code: "GM", dial_code: "+220", flag: "https://flagcdn.com/w40/gm.png" },
  //   { name: "Georgia", code: "GE", dial_code: "+995", flag: "https://flagcdn.com/w40/ge.png" },
  //   { name: "Germany", code: "DE", dial_code: "+49", flag: "https://flagcdn.com/w40/de.png" },
  //   { name: "Ghana", code: "GH", dial_code: "+233", flag: "https://flagcdn.com/w40/gh.png" },
  //   { name: "Greece", code: "GR", dial_code: "+30", flag: "https://flagcdn.com/w40/gr.png" },
  //   { name: "Grenada", code: "GD", dial_code: "+1", flag: "https://flagcdn.com/w40/gd.png" },
  //   { name: "Guatemala", code: "GT", dial_code: "+502", flag: "https://flagcdn.com/w40/gt.png" },
  //   { name: "Guinea", code: "GN", dial_code: "+224", flag: "https://flagcdn.com/w40/gn.png" },
  //   { name: "Guinea-Bissau", code: "GW", dial_code: "+245", flag: "https://flagcdn.com/w40/gw.png" },
  //   { name: "Guyana", code: "GY", dial_code: "+592", flag: "https://flagcdn.com/w40/gy.png" },
  //   { name: "Haiti", code: "HT", dial_code: "+509", flag: "https://flagcdn.com/w40/ht.png" },
  //   { name: "Honduras", code: "HN", dial_code: "+504", flag: "https://flagcdn.com/w40/hn.png" },
  //   { name: "Hungary", code: "HU", dial_code: "+36", flag: "https://flagcdn.com/w40/hu.png" },
  //   { name: "Iceland", code: "IS", dial_code: "+354", flag: "https://flagcdn.com/w40/is.png" },
  //   { name: "India", code: "IN", dial_code: "+91", flag: "https://flagcdn.com/w40/in.png" },
  //   { name: "Indonesia", code: "ID", dial_code: "+62", flag: "https://flagcdn.com/w40/id.png" },
  //   { name: "Iran", code: "IR", dial_code: "+98", flag: "https://flagcdn.com/w40/ir.png" },
  //   { name: "Iraq", code: "IQ", dial_code: "+964", flag: "https://flagcdn.com/w40/iq.png" },
  //   { name: "Ireland", code: "IE", dial_code: "+353", flag: "https://flagcdn.com/w40/ie.png" },
  //   { name: "Israel", code: "IL", dial_code: "+972", flag: "https://flagcdn.com/w40/il.png" },
  //   { name: "Italy", code: "IT", dial_code: "+39", flag: "https://flagcdn.com/w40/it.png" },
  //   { name: "Jamaica", code: "JM", dial_code: "+1", flag: "https://flagcdn.com/w40/jm.png" },
  //   { name: "Japan", code: "JP", dial_code: "+81", flag: "https://flagcdn.com/w40/jp.png" },
  //   { name: "Jordan", code: "JO", dial_code: "+962", flag: "https://flagcdn.com/w40/jo.png" },
  //   { name: "Kazakhstan", code: "KZ", dial_code: "+7", flag: "https://flagcdn.com/w40/kz.png" },
  //   { name: "Kenya", code: "KE", dial_code: "+254", flag: "https://flagcdn.com/w40/ke.png" },
  //   { name: "Kiribati", code: "KI", dial_code: "+686", flag: "https://flagcdn.com/w40/ki.png" },
  //   { name: "Kuwait", code: "KW", dial_code: "+965", flag: "https://flagcdn.com/w40/kw.png" },
  //   { name: "Kyrgyzstan", code: "KG", dial_code: "+996", flag: "https://flagcdn.com/w40/kg.png" },
  //   { name: "Laos", code: "LA", dial_code: "+856", flag: "https://flagcdn.com/w40/la.png" },
  //   { name: "Latvia", code: "LV", dial_code: "+371", flag: "https://flagcdn.com/w40/lv.png" },
  //   { name: "Lebanon", code: "LB", dial_code: "+961", flag: "https://flagcdn.com/w40/lb.png" },
  //   { name: "Lesotho", code: "LS", dial_code: "+266", flag: "https://flagcdn.com/w40/ls.png" },
  //   { name: "Liberia", code: "LR", dial_code: "+231", flag: "https://flagcdn.com/w40/lr.png" },
  //   { name: "Libya", code: "LY", dial_code: "+218", flag: "https://flagcdn.com/w40/ly.png" },
  //   { name: "Liechtenstein", code: "LI", dial_code: "+423", flag: "https://flagcdn.com/w40/li.png" },
  //   { name: "Lithuania", code: "LT", dial_code: "+370", flag: "https://flagcdn.com/w40/lt.png" },
  //   { name: "Luxembourg", code: "LU", dial_code: "+352", flag: "https://flagcdn.com/w40/lu.png" },
  //   { name: "Madagascar", code: "MG", dial_code: "+261", flag: "https://flagcdn.com/w40/mg.png" },
  //   { name: "Malawi", code: "MW", dial_code: "+265", flag: "https://flagcdn.com/w40/mw.png" },
  //   { name: "Malaysia", code: "MY", dial_code: "+60", flag: "https://flagcdn.com/w40/my.png" },
  //   { name: "Maldives", code: "MV", dial_code: "+960", flag: "https://flagcdn.com/w40/mv.png" },
  //   { name: "Mali", code: "ML", dial_code: "+223", flag: "https://flagcdn.com/w40/ml.png" },
  //   { name: "Malta", code: "MT", dial_code: "+356", flag: "https://flagcdn.com/w40/mt.png" },
  //   { name: "Marshall Islands", code: "MH", dial_code: "+692", flag: "https://flagcdn.com/w40/mh.png" },
  //   { name: "Mauritania", code: "MR", dial_code: "+222", flag: "https://flagcdn.com/w40/mr.png" },
  //   { name: "Mauritius", code: "MU", dial_code: "+230", flag: "https://flagcdn.com/w40/mu.png" },
  //   { name: "Mexico", code: "MX", dial_code: "+52", flag: "https://flagcdn.com/w40/mx.png" },
  //   { name: "Micronesia", code: "FM", dial_code: "+691", flag: "https://flagcdn.com/w40/fm.png" },
  //   { name: "Moldova", code: "MD", dial_code: "+373", flag: "https://flagcdn.com/w40/md.png" },
  //   { name: "Monaco", code: "MC", dial_code: "+377", flag: "https://flagcdn.com/w40/mc.png" },
  //   { name: "Mongolia", code: "MN", dial_code: "+976", flag: "https://flagcdn.com/w40/mn.png" },
  //   { name: "Montenegro", code: "ME", dial_code: "+382", flag: "https://flagcdn.com/w40/me.png" },
  //   { name: "Morocco", code: "MA", dial_code: "+212", flag: "https://flagcdn.com/w40/ma.png" },
  //   { name: "Mozambique", code: "MZ", dial_code: "+258", flag: "https://flagcdn.com/w40/mz.png" },
  //   { name: "Myanmar", code: "MM", dial_code: "+95", flag: "https://flagcdn.com/w40/mm.png" },
  //   { name: "Namibia", code: "NA", dial_code: "+264", flag: "https://flagcdn.com/w40/na.png" },
  //   { name: "Nauru", code: "NR", dial_code: "+674", flag: "https://flagcdn.com/w40/nr.png" },
  //   { name: "Nepal", code: "NP", dial_code: "+977", flag: "https://flagcdn.com/w40/np.png" },
  //   { name: "Netherlands", code: "NL", dial_code: "+31", flag: "https://flagcdn.com/w40/nl.png" },
  //   { name: "New Zealand", code: "NZ", dial_code: "+64", flag: "https://flagcdn.com/w40/nz.png" },
  //   { name: "Nicaragua", code: "NI", dial_code: "+505", flag: "https://flagcdn.com/w40/ni.png" },
  //   { name: "Niger", code: "NE", dial_code: "+227", flag: "https://flagcdn.com/w40/ne.png" },
  //   { name: "Nigeria", code: "NG", dial_code: "+234", flag: "https://flagcdn.com/w40/ng.png" },
  //   { name: "North Korea", code: "KP", dial_code: "+850", flag: "https://flagcdn.com/w40/kp.png" },
  //   { name: "North Macedonia", code: "MK", dial_code: "+389", flag: "https://flagcdn.com/w40/mk.png" },
  //   { name: "Norway", code: "NO", dial_code: "+47", flag: "https://flagcdn.com/w40/no.png" },
  //   { name: "Oman", code: "OM", dial_code: "+968", flag: "https://flagcdn.com/w40/om.png" },
  //   { name: "Pakistan", code: "PK", dial_code: "+92", flag: "https://flagcdn.com/w40/pk.png" },
  //   { name: "Palau", code: "PW", dial_code: "+680", flag: "https://flagcdn.com/w40/pw.png" },
  //   { name: "Palestine", code: "PS", dial_code: "+970", flag: "https://flagcdn.com/w40/ps.png" },
  //   { name: "Panama", code: "PA", dial_code: "+507", flag: "https://flagcdn.com/w40/pa.png" },
  //   { name: "Papua New Guinea", code: "PG", dial_code: "+675", flag: "https://flagcdn.com/w40/pg.png" },
  //   { name: "Paraguay", code: "PY", dial_code: "+595", flag: "https://flagcdn.com/w40/py.png" },
  //   { name: "Peru", code: "PE", dial_code: "+51", flag: "https://flagcdn.com/w40/pe.png" },
  //   { name: "Philippines", code: "PH", dial_code: "+63", flag: "https://flagcdn.com/w40/ph.png" },
  //   { name: "Poland", code: "PL", dial_code: "+48", flag: "https://flagcdn.com/w40/pl.png" },
  //   { name: "Portugal", code: "PT", dial_code: "+351", flag: "https://flagcdn.com/w40/pt.png" },
  //   { name: "Qatar", code: "QA", dial_code: "+974", flag: "https://flagcdn.com/w40/qa.png" },
  //   { name: "Romania", code: "RO", dial_code: "+40", flag: "https://flagcdn.com/w40/ro.png" },
  //   { name: "Russia", code: "RU", dial_code: "+7", flag: "https://flagcdn.com/w40/ru.png" },
  //   { name: "Rwanda", code: "RW", dial_code: "+250", flag: "https://flagcdn.com/w40/rw.png" },
  //   { name: "Saint Kitts and Nevis", code: "KN", dial_code: "+1", flag: "https://flagcdn.com/w40/kn.png" },
  //   { name: "Saint Lucia", code: "LC", dial_code: "+1", flag: "https://flagcdn.com/w40/lc.png" },
  //   { name: "Saint Vincent and the Grenadines", code: "VC", dial_code: "+1", flag: "https://flagcdn.com/w40/vc.png" },
  //   { name: "Samoa", code: "WS", dial_code: "+685", flag: "https://flagcdn.com/w40/ws.png" },
  //   { name: "San Marino", code: "SM", dial_code: "+378", flag: "https://flagcdn.com/w40/sm.png" },
  //   { name: "Sao Tome and Principe", code: "ST", dial_code: "+239", flag: "https://flagcdn.com/w40/st.png" },
  //   { name: "Saudi Arabia", code: "SA", dial_code: "+966", flag: "https://flagcdn.com/w40/sa.png" },
  //   { name: "Senegal", code: "SN", dial_code: "+221", flag: "https://flagcdn.com/w40/sn.png" },
  //   { name: "Serbia", code: "RS", dial_code: "+381", flag: "https://flagcdn.com/w40/rs.png" },
  //   { name: "Seychelles", code: "SC", dial_code: "+248", flag: "https://flagcdn.com/w40/sc.png" },
  //   { name: "Sierra Leone", code: "SL", dial_code: "+232", flag: "https://flagcdn.com/w40/sl.png" },
  //   { name: "Singapore", code: "SG", dial_code: "+65", flag: "https://flagcdn.com/w40/sg.png" },
  //   { name: "Slovakia", code: "SK", dial_code: "+421", flag: "https://flagcdn.com/w40/sk.png" },
  //   { name: "Slovenia", code: "SI", dial_code: "+386", flag: "https://flagcdn.com/w40/si.png" },
  //   { name: "Solomon Islands", code: "SB", dial_code: "+677", flag: "https://flagcdn.com/w40/sb.png" },
  //   { name: "Somalia", code: "SO", dial_code: "+252", flag: "https://flagcdn.com/w40/so.png" },
  //   { name: "South Africa", code: "ZA", dial_code: "+27", flag: "https://flagcdn.com/w40/za.png" },
  //   { name: "South Korea", code: "KR", dial_code: "+82", flag: "https://flagcdn.com/w40/kr.png" },
  //   { name: "South Sudan", code: "SS", dial_code: "+211", flag: "https://flagcdn.com/w40/ss.png" },
  //   { name: "Spain", code: "ES", dial_code: "+34", flag: "https://flagcdn.com/w40/es.png" },
  //   { name: "Sri Lanka", code: "LK", dial_code: "+94", flag: "https://flagcdn.com/w40/lk.png" },
  //   { name: "Sudan", code: "SD", dial_code: "+249", flag: "https://flagcdn.com/w40/sd.png" },
  //   { name: "Suriname", code: "SR", dial_code: "+597", flag: "https://flagcdn.com/w40/sr.png" },
  //   { name: "Sweden", code: "SE", dial_code: "+46", flag: "https://flagcdn.com/w40/se.png" },
  //   { name: "Switzerland", code: "CH", dial_code: "+41", flag: "https://flagcdn.com/w40/ch.png" },
  //   { name: "Syria", code: "SY", dial_code: "+963", flag: "https://flagcdn.com/w40/sy.png" },
  //   { name: "Tajikistan", code: "TJ", dial_code: "+992", flag: "https://flagcdn.com/w40/tj.png" },
  //   { name: "Tanzania", code: "TZ", dial_code: "+255", flag: "https://flagcdn.com/w40/tz.png" },
  //   { name: "Thailand", code: "TH", dial_code: "+66", flag: "https://flagcdn.com/w40/th.png" },
  //   { name: "Timor-Leste", code: "TL", dial_code: "+670", flag: "https://flagcdn.com/w40/tl.png" },
  //   { name: "Togo", code: "TG", dial_code: "+228", flag: "https://flagcdn.com/w40/tg.png" },
  //   { name: "Tonga", code: "TO", dial_code: "+676", flag: "https://flagcdn.com/w40/to.png" },
  //   { name: "Trinidad and Tobago", code: "TT", dial_code: "+1", flag: "https://flagcdn.com/w40/tt.png" },
  //   { name: "Tunisia", code: "TN", dial_code: "+216", flag: "https://flagcdn.com/w40/tn.png" },
  //   { name: "Turkey", code: "TR", dial_code: "+90", flag: "https://flagcdn.com/w40/tr.png" },
  //   { name: "Turkmenistan", code: "TM", dial_code: "+993", flag: "https://flagcdn.com/w40/tm.png" },
  //   { name: "Tuvalu", code: "TV", dial_code: "+688", flag: "https://flagcdn.com/w40/tv.png" },
  //   { name: "Uganda", code: "UG", dial_code: "+256", flag: "https://flagcdn.com/w40/ug.png" },
  //   { name: "Ukraine", code: "UA", dial_code: "+380", flag: "https://flagcdn.com/w40/ua.png" },
  //   { name: "United Arab Emirates", code: "AE", dial_code: "+971", flag: "https://flagcdn.com/w40/ae.png" },
  //   { name: "United Kingdom", code: "GB", dial_code: "+44", flag: "https://flagcdn.com/w40/gb.png" },
  //   { name: "United States", code: "US", dial_code: "+1", flag: "https://flagcdn.com/w40/us.png" },
  //   { name: "Uruguay", code: "UY", dial_code: "+598", flag: "https://flagcdn.com/w40/uy.png" },
  //   { name: "Uzbekistan", code: "UZ", dial_code: "+998", flag: "https://flagcdn.com/w40/uz.png" },
  //   { name: "Vanuatu", code: "VU", dial_code: "+678", flag: "https://flagcdn.com/w40/vu.png" },
  //   { name: "Vatican City", code: "VA", dial_code: "+39", flag: "https://flagcdn.com/w40/va.png" },
  //   { name: "Venezuela", code: "VE", dial_code: "+58", flag: "https://flagcdn.com/w40/ve.png" },
  //   { name: "Vietnam", code: "VN", dial_code: "+84", flag: "https://flagcdn.com/w40/vn.png" },
  //   { name: "Yemen", code: "YE", dial_code: "+967", flag: "https://flagcdn.com/w40/ye.png" },
  //   { name: "Zambia", code: "ZM", dial_code: "+260", flag: "https://flagcdn.com/w40/zm.png" },
  //   { name: "Zimbabwe", code: "ZW", dial_code: "+263", flag: "https://flagcdn.com/w40/zw.png" }
  // ];
  countries = [
  { name: "Egypt" },
  { name: "Saudi Arabia" },
  { name: "United Arab Emirates" },
  { name: "Qatar" },
  { name: "United Kingdom" },
  { name: "United States" },
];
onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.submitSuccess = false;
      this.submitError = '';

      const formData = this.contactForm.value;

      // Replace with your actual backend endpoint
      this.http
        .post('https://your-api-endpoint.com/contact', formData)
        .subscribe({
          next: (response) => {
            this.isLoading = false;
            this.submitSuccess = true;
            this.contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
              this.submitSuccess = false;
            }, 5000);
          },
          error: (error) => {
            this.isLoading = false;
            this.submitError =
              'There was an error submitting the form. Please try again.';
            console.error('Form submission error:', error);

            // Hide error message after 5 seconds
            setTimeout(() => {
              this.submitError = '';
            }, 5000);
          },
        });
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}

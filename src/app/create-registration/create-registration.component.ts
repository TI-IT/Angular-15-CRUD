import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})
export class CreateRegistrationComponent implements OnInit {
  public packages: string[] = ["Monthly", "Quarterly", "Yearly"];
  public genders: string[] = ["Male", "Female"];
  public importantList: string[] = [
    "Toxic Fat reduction",
    "Energy and Endurance",
    "Building Lean Muscle",
    "Healthier Digestive System",
    "Sugar Craving Body",
    "Fitness",
  ];

  public registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        mobile: [''],
        weight: [''],
        height: [''],
        bmi: [''],
        bmiResult: [''],
        gender: [''],
        requireTrainer: [''],
        package: [''],
        important: [''],
        haveGymBefore: [''],
        enquiryDate: ['']
      }
    );
    this.registerForm.controls['height'].valueChanges.subscribe(res=>{
      this.calculateBim(res);
    })
  };


  submit() {
    console.log(this.registerForm.value)
  }

  calculateBim(heightValue: number) {
    const weight = this.registerForm.value.height;
    const height = heightValue;
    const bim = weight / (height * height);
    this.registerForm.controls['bim'].patchValue(bim);
    switch (true) {
      case bim < 18.5:
        this.registerForm.controls['bimResult'].patchValue("Underweight");
        break;
      case (bim >= 18.5 && bim < 25):
        this.registerForm.controls['bimResult'].patchValue("Normal");
        break;
      case (bim >= 25 && bim < 30):
        this.registerForm.controls['bimResult'].patchValue("Owerweight");
        break;

      default:
        this.registerForm.controls['bimResult'].patchValue("Obese");
        break;
    }
  }
}

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FeatherModule } from 'angular-feather';
import { VolumeX, Volume2, ArrowRight } from 'angular-feather/icons';
const icons = {
  VolumeX,
  Volume2,
  ArrowRight
};


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FeatherModule.pick(icons)
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should change volume', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.audio.volume = 0;
    fixture.componentInstance.muteUnmute();
    fixture.detectChanges();
    expect(fixture.componentInstance.audio.volume).toBeGreaterThanOrEqual(0.1);
  });

});

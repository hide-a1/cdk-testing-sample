import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';
import { CounterHarness } from './counter-harness';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  // ハーネス有り
  // let harness: CounterHarness;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    // ハーネス有り
    // harness = await TestbedHarnessEnvironment.harnessForFixture(
    //   fixture,
    //   CounterHarness
    // );
    fixture.detectChanges();
  });

  it('should create', () => {
    // OnInitまでは安全
    expect(component).toBeTruthy();
  });

  it('should display count', async () => {
    component.count = 100;

    // ハーネスなし
    fixture.detectChanges();
    const displayCount = fixture.debugElement.query(By.css('.count-display'));
    expect(displayCount.nativeElement.textContent).toBe('100');

    // ハーネス有り
    // const displayCount = await harness.getDisplayedCount();
    // expect(displayCount).toBe('100');
  });

  it('should emit increment', async () => {
    spyOn(component.increment, 'emit');

    // ハーネス無し
    const button = fixture.debugElement.queryAll(By.css('button'))[0];
    (button.nativeElement as HTMLButtonElement).click();
    fixture.detectChanges();

    expect(component.increment.emit).toHaveBeenCalled();

    // ハーネス有り
    // await harness.increment();

    // expect(component.increment.emit).toHaveBeenCalled();
  });
});

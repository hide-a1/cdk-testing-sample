// counter-harness.ts

import { ComponentHarness } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';

export class CounterHarness extends ComponentHarness {
  // html内で対象にするタグを指定
  static hostSelector = 'app-counter';

  // locatorFor = 要素を特定するための関数
  private getDisplayCountLocator = this.locatorFor('.count-display');

  // MatButtonHarness = AngularMaterialが用意してくれているハーネス便利プロパティがいっぱい
  private getIncrementLocator = this.locatorFor(
    MatButtonHarness.with({
      text: 'Increment',
    })
  );

  async getDisplayedCount(): Promise<string> {
    const display = await this.getDisplayCountLocator();
    return await display.text();
  }

  async increment(): Promise<void> {
    const button = await this.getIncrementLocator();
    await button.click();
  }
}

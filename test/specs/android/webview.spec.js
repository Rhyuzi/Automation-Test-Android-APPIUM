describe('Web Browser Access', () => {
  beforeEach(async () => {
    const loginButtonSelector = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button";
    const loginButton = await $(loginButtonSelector);
    loginButton.click();
  });

  it('Login validation', async () => {
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button").click()
    const validationNip = "Ketikkan NIP"
    const pageSource = await $('//*').getText()
    const isErrorMessagePresent = pageSource.includes(validationNip);
    if (isErrorMessagePresent) {
      // const inputNip = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText";
      // const inputPas = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText";
      // await $(inputNip).setValue("3212");
      // await $(inputPas).clearValue();

      await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button").click()

      const validationNip = "Masukkan kata sandi"
      const pageSource = await $('//*').getText()
      const isErrorMessageNip = pageSource.includes(validationNip);
        if (isErrorMessageNip) {
          console.log("Expected error message is present on the screen.");
      } else {
        throw new Error("Expected error message is not present on the screen.. Test stopped.");
      }
    } else {
      throw new Error("Expected error message is not present on the screen.. Test stopped.");
        // console.log("Expected error message is not present on the screen.");
    }

  })

  it('Login failed wrong username or password', async () => {
    const inputNip = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText";
    const inputPas = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText";
    await $(inputNip).setValue("3212");
    await $(inputPas).setValue("wrong");
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button").click()

    const errorMessage = "Nip atau kata sandi salah";
    const pageSource = await $('//*').getText();

    const isErrorMessagePresent = pageSource.includes(errorMessage);
    if (isErrorMessagePresent) {
          console.log("Expected error message is present on the screen.");
      } else {
          console.log("Expected error message is not present on the screen.");
      }
  })

  it('login success', async () => {
    const inputNip = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText";
    const inputPas = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText";
    await $(inputNip).setValue("8181");
    await $(inputPas).setValue("Qwerty123!@");

    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button").click()

    const selector = 'new UiSelector().text("Selamat Datang,").className("android.widget.TextView")';
    await $(`android=${selector}`).waitForExist({ timeout: 5000 });
    const header = await $(`android=${selector}`).getText();
    expect(headerText).toContain("Selamat Datang,");
  });

});
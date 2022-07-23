package com.fandom;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import org.devio.rn.splashscreen.SplashScreen;
public class MainActivity extends ReactActivity {
  @Override
  protected void onCreate(Bundle saveInstanceState)
  {
    super.onCreate(saveInstanceState);
    SplashScreen.show(this);
  }

  @Override
  protected String getMainComponentName() {
    return "Fandom";
  }

}

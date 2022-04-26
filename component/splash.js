import React from 'react'
import AnimatedSplash from "react-native-animated-splash-screen";

function splash({navigation}) {
    return (
    <AnimatedSplash
        translucent={true}
        logoImage={require("../img/splash.png")}
        backgroundColor={"#fff"}
        logoHeight={300}
        logoWidth={300}
      >
      </AnimatedSplash>
    )
}

export default splash

import { Button, ButtonIcon, ButtonLabel } from "./components/Button";
import { Container } from "./components/Container";
import { Page, PageContent } from "./components/PageLayout";

import { useState, useEffect } from "react";

const App = () => {
  const [browserInfo, setBrowserInfo] = useState<{
    isStandalone: boolean;
  }>({
    isStandalone: false,
  });

  useEffect(() => {
    const isStandalone = window.matchMedia(
      "(display-mode: fullscreen)",
    ).matches;
    setBrowserInfo({ isStandalone });

    return () => {
      setBrowserInfo({ isStandalone: false });
    };
  });

  return (
    <Page>
      <PageContent>
        <Container pdng="md">
          <Button variant="filled" className="standalone">
            <ButtonIcon>add</ButtonIcon>
            <ButtonLabel className="u-fw--bold">カートに追加する</ButtonLabel>
          </Button>
          <p>
            {browserInfo.isStandalone
              ? "This app is running in standalone mode."
              : "This app is running in a browser."}
          </p>
        </Container>
      </PageContent>
    </Page>
  );
};

export default App;

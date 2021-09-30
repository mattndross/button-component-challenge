import Button from "./components/Buttons/Button";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div>
      <div className="container">
        <div className="sidebar"></div>

        <div className="main">
          <h1>Buttons</h1>

          <div className="flex ">
            <div className="block">
              <Paragraph text="<Button />" />
              <Button />
            </div>
            <div className="block">
              <Paragraph light="light" text="&:hover, &:focus" />
              <Button onHover />
            </div>
          </div>

          <div className="flex ">
            <div className="block">
              <Paragraph text={`<Button variant="outline" />`} />
              <Button variant="outline" />
            </div>
            <div className="block">
              <Paragraph light="light" text="&:hover, &:focus" />
              <Button variant="outline" onHover />
            </div>
          </div>

          <div className="flex">
            <div className="block">
              <Paragraph text={`<Button variant="text" />`} />
              <Button variant="text" />
            </div>
            <div className="block">
              <Paragraph light="light" text="&:hover, &:focus" />
              <Button variant="text" onHover />
            </div>
          </div>

          <div className="flex inline">
            <div className="block">
              <Paragraph text="<Button disabledShadow />" />
              <Button disabledShadow />
            </div>
          </div>

          <div className="flex inline">
            <div className="block">
              <Paragraph text={`<Button disabled/>`} />
              <Button disabled />
            </div>
            <div className="block">
              <Paragraph text={`<Button variant="text" disabled/>`} />
              <Button variant="text" disabled />
            </div>
          </div>

          <div className="flex">
            <div className="block">
              <Paragraph text={`<Button startIcon="local_grocery_store" />`} />
              <Button startIcon="local_grocery_store" />
            </div>
            <div className="block">
              <Paragraph text={`<Button endIcon="face" />`} />
              <Button endIcon="face" />
            </div>
          </div>

          <div className="flex">
            <div className="block">
              <Paragraph text={`<Button size="sm"/>`} />
              <Button size="sm" />
            </div>
            <div className="block">
              <Paragraph text={`<Button size="md"/>`} />
              <Button size="md" />
            </div>
            <div className="block">
              <Paragraph text={`<Button size="lg"/>`} />
              <Button size="lg" />
            </div>
          </div>
          <div className="flex inline">
            <div className="block">
              <Paragraph text={`<Button color="default" />`} />
              <Button color="default" />
            </div>

            <div className="block">
              <Paragraph text={`<Button color="primary" />`} />
              <Button color="primary" />
            </div>

            <div className="block">
              <Paragraph text={`<Button color="secondary" />`} />
              <Button color="secondary" />
            </div>

            <div className="block">
              <Paragraph text={`<Button color="danger" />`} />
              <Button color="danger" />
            </div>
          </div>

          
        </div>
      </div>
        <footer>
          created by{" "}
          <a href="https://devchallenges.io/portfolio/mattndross">mattndross</a>{" "}
          - devChallenges.io
        </footer>
    </div>
  );
}

export default App;

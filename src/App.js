import Button from "./components/Button";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div>
    <div className="container">
      <div className="sidebar"></div>

      <div className="main">
        <h1>Buttons</h1>
        <Paragraph text="<Button />" />
        <Button />
        <Paragraph light="light" text="&:hover, &:focus"/>
        <Button />
        <Paragraph text={`<Button variant="outline" />`}/>
        <Button variant="outline" />
        <Paragraph light="light" text="&:hover, &:focus"/>
        <Button variant="outline" />
        <Paragraph text={`<Button variant="text" />`}/>
        <Button variant="text" />
        <Paragraph text="disableShadow"/>
        <Button disableShadow />
        <Paragraph text="disabled"/>
        <Button disabled />
        <Paragraph text={`<Button variant="text" disabled/>`}/>
        <Button variant="text" disabled/>
        <Paragraph text={`<Button startIcon="local_grocery_store" />`}/>
        <Button startIcon="local_grocery_store" />
        <Paragraph text={`<Button endIcon="local_grocery_store" />`}/>
        <Button endIcon="local_grocery_store" />
        <Paragraph text={`<Button size="sm"/>`} />
        <Button size="sm"/>
        <Paragraph text={`<Button size="md"/>`} />
        <Button size="md"/>
        <Paragraph text={`<Button size="lg"/>`} />
        <Button size="lg"/>
        <Paragraph text={`<Button color="default" />`} />
        <Button color="default" />
        <Paragraph text={`<Button color="primary" />`} />
        <Button color="primary" />
        <Paragraph text={`<Button color="secondary" />`} />
        <Button color="secondary" />
        <Paragraph text={`<Button color="danger" />`} />
        <Button color="danger" />
        <Paragraph light="light" text="&:hover, &:focus"/>
        <Button color="default" />
        <Button color="primary" />
        <Button color="secondary" />
        <Button color="danger" />


      </div>
      <footer>created by <a href="https://devchallenges.io/portfolio/mattndross">mattndross</a> - devChallenges.io</footer>
    </div>
    </div>
  );
}

export default App;

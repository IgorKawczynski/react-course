import { render, screen } from "@testing-library/react"
import Header from "../components/Header"

describe('Header', () => {
  beforeEach(() => {
    render(<Header />)
  })
 it('should render with correct title', () => {
  // render(<Header />
  expect(screen.getByText('todos')).toBeInTheDocument();
 })

 it('should render with correct description', () => {
  // render(<Header />)
  expect(screen.getByText('Items will persist in the browser local storage')).toBeInTheDocument();
 })
})

test('sholud render componet with styles', ()=> {
  const { container } = render(<Header />)
  const headerElement = container.firstChild;
  const headerStyle = getComputedStyle(headerElement);

  expect(headerStyle.padding).toBe('20px 0px');
})
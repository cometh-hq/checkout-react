import { CheckoutButton } from "../index"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/CheckoutButton",
  component: CheckoutButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    apikey: { control: "text" },
    apiUrl: { control: "text" },
    productId: { control: "number" },
    userAddress: { control: "text" },
    email: { control: "text" },
    parameters: { control: "object" },
    successUrl: { control: "text" },
    failUrl: { control: "text" },
    openInNewTab: { control: "boolean" },
    children: { control: "text" },
    loadingComponent: { control: "text" },
    onError: { action: "onError" },
    onNewTransaction: { action: "onNewTransaction" }
  },
  // Use `fn` to spy on the onError arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onError: fn() }
} satisfies Meta<typeof CheckoutButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    apikey: "HS6I6t68fsZVBFiSVZ489zYtGETt2Jte",
    apiUrl: "https://checkout.develop.core.cometh.tech/v1",
    productId: 2,
    userAddress: "0x29ebfb99209FAECb92Ada97055aF05739cfFc20B",
    email: "raphael@cometh.io",
    parameters: { to: "0x29ebfb99209FAECb92Ada97055aF05739cfFc20B" },
    successUrl: "https://demo.cometh.io?successMint=true",
    failUrl: "https://demo.cometh.io?successMint=false",
    openInNewTab: true,
    children: "Checkout Now",
    loadingComponent: "Loading..."
  }
}

export const LoadingState: Story = {
  args: {
    ...Default.args,
    children: "Loading...",
    loadingComponent: "Please wait..."
  }
}

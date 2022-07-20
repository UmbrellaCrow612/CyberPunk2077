/* eslint-disable @next/next/no-img-element */
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react'

interface WireTabsProps {}

export const WireTabs: React.FC<WireTabsProps> = () => {
  const data = [
    {
      label: 'EPISODE 1',
      value: 'EPISODE 1',
      imageUrl: `/images/wire-bg-1.jpeg`,
    },
    {
      label: 'EPISODE 2',
      value: 'react',
      imageUrl: `/images/wire-bg-2.jpeg`,
    },

    {
      label: 'EPISODE 3',
      value: 'vue',
      imageUrl: `/images/wire-bg-3.jpeg`,
    },

    {
      label: 'EPISODE 4',
      value: 'angular',
      imageUrl: `/images/wire-bg-4.jpeg`,
    },

    {
      label: 'EPISODE 5',
      value: 'svelte',
      imageUrl: `/images/wire-bg-1.jpeg`,
    },
  ]
  return (
    <div className="w-full">
      <Tabs value="EPISODE 1">
        <TabsHeader className="flex">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="h-[300px]">
          {data.map(({ value, imageUrl }) => (
            <TabPanel
              key={value}
              value={value}
              className="flex items-center justify-center"
            >
              <img
                src={imageUrl}
                alt={imageUrl}
                loading="lazy"
                className="w-[500px] h-[290px] cursor-pointer rounded-lg shadow-md"
              />
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  )
}

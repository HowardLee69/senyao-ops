import { CRM } from "@/components/atomic-crm/root/CRM";

/**
 * Application entry point
 *
 * Customize Atomic CRM by passing props to the CRM component:
 *  - companySectors
 *  - darkTheme
 *  - dealCategories
 *  - dealPipelineStatuses
 *  - dealStages
 *  - lightTheme
 *  - logo
 *  - noteStatuses
 *  - taskTypes
 *  - title
 * ... as well as all the props accepted by shadcn-admin-kit's <Admin> component.
 *
 * @example
 * const App = () => (
 *    <CRM
 *       logo="./img/logo.png"
 *       title="Acme CRM"
 *    />
 * );
 */
const App = () => (
  <CRM
    title="Senyao Ops"
    companySectors={[
      { value: "junior_high", label: "國中" },
      { value: "senior_high", label: "高中" },
      { value: "both", label: "國高中" },
      { value: "elementary", label: "國小" },
      { value: "other", label: "其他" },
    ]}
    dealCategories={[
      { value: "meal_ordering", label: "訂餐" },
      { value: "exam_gen", label: "出卷" },
      { value: "tutoring", label: "批改輔導" },
      { value: "full_package", label: "全功能" },
    ]}
    dealStages={[
      { value: "lead", label: "初步" },
      { value: "contacted", label: "已聯繫" },
      { value: "demo_scheduled", label: "已約 Demo" },
      { value: "demo_done", label: "Demo 完成" },
      { value: "pilot", label: "試用中" },
      { value: "proposal", label: "已報價" },
      { value: "negotiation", label: "議價中" },
      { value: "won", label: "成交" },
      { value: "lost", label: "流失" },
    ]}
    dealPipelineStatuses={["成交", "流失"]}
    taskTypes={[
      { value: "call", label: "電話" },
      { value: "email", label: "Email" },
      { value: "meeting", label: "拜訪" },
      { value: "demo", label: "Demo" },
      { value: "follow_up", label: "跟進" },
      { value: "line", label: "LINE 訊息" },
      { value: "other", label: "其他" },
    ]}
    noteStatuses={[
      { value: "cold", label: "冷淡", color: "#93c5fd" },
      { value: "warm", label: "溫和", color: "#fcd34d" },
      { value: "hot", label: "積極", color: "#f87171" },
      { value: "contracted", label: "已簽約", color: "#4ade80" },
    ]}
    currency="TWD"
  />
);

export default App;

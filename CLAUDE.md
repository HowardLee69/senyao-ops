@AGENTS.md

# Senyao Ops — 專案補充

## 回覆語言
永遠使用**繁體中文**回覆。

## 專案定位
Senyao 內部運營系統。Phase 1 = CRM（B2B 補習班客戶管理）。
基於 Atomic CRM (MIT) fork，客製化為補習班 B2B 銷售工具。

## 部署
- **前端**: Vercel
- **後端**: Supabase Cloud (PostgreSQL + Auth)

## 客製化方式
- **CRM 設定**（Pipeline 階段、分類等）：修改 `src/App.tsx` 的 `<CRM>` props
- **新增欄位**：DB schema 加欄位 → types.ts → *Inputs.tsx → *Show.tsx
- **新增 Resource**：DB 建表 → 建元件目錄 → CRM.tsx 註冊

## 相關專案
- **Senyao Platform**（客戶產品）：`D:\dev\senyao-platform`
- Phase 3 會串接 Senyao Platform API 拉用量/營收數據

## Spec 文件
- 設計規格：`D:\dev\senyao-platform\docs\superpowers\specs\2026-04-07-senyao-ops-crm-design.md`
- 實作計畫：`D:\dev\senyao-platform\docs\superpowers\plans\2026-04-07-senyao-ops-phase0-skeleton.md`

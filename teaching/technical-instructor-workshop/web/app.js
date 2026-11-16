"use strict";
const byId = id => document.getElementById(id);
const status = byId("status");
async function request(path, options) {
  const response = await fetch(path, options);
  const data = await response.json();
  if (!response.ok) throw new Error(`${response.status}: ${data.error}`);
  return data;
}
function addText(parent, tag, text) {
  const child = document.createElement(tag);
  child.textContent = text;
  parent.append(child);
  return child;
}
async function showWorkshops() {
  status.textContent = "Loading workshops…";
  try {
    const data = await request(`/api/workshops?q=${encodeURIComponent(byId("search").value)}`);
    byId("workshops").replaceChildren();
    for (const workshop of data.workshops) {
      const card = document.createElement("article");
      card.className = "card";
      addText(card, "h3", workshop.title);
      addText(card, "p", `ID ${workshop.id} · ${workshop.duration_minutes} minutes`);
      byId("workshops").append(card);
    }
    status.textContent = `${data.workshops.length} workshop(s) found.`;
  } catch (error) { status.textContent = `Could not load workshops. ${error.message}`; }
}
async function showReport() {
  const data = await request("/api/report");
  byId("report").replaceChildren();
  for (const item of data.report) {
    const row = document.createElement("tr");
    addText(row, "td", item.title);
    addText(row, "td", String(item.enrolments));
    byId("report").append(row);
  }
}
byId("search-button").addEventListener("click", showWorkshops);
byId("search").addEventListener("keydown", event => {
  if (event.key === "Enter") { event.preventDefault(); showWorkshops(); }
});
byId("enrol-form").addEventListener("submit", async event => {
  event.preventDefault();
  const button = event.submitter;
  button.disabled = true;
  const payload = {workshop_id: Number(byId("workshop-id").value), learner_name: byId("learner-name").value.trim()};
  try {
    const response = await fetch("/api/enrolments", {
      method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(payload)
    });
    const data = await response.json();
    byId("response").textContent = `HTTP ${response.status}\n${JSON.stringify(data, null, 2)}`;
    if (response.ok) await showReport();
  } catch (error) { byId("response").textContent = `Request failed. ${error.message}`; }
  finally { button.disabled = false; }
});
async function initialise() {
  try {
    const data = await request("/api/workshops");
    for (const workshop of data.workshops) {
      const option = addText(byId("workshop-id"), "option", workshop.title);
      option.value = workshop.id;
    }
    await Promise.all([showWorkshops(), showReport()]);
  } catch (error) { status.textContent = `Setup failed. ${error.message}`; }
}
initialise();
